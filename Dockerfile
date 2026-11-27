# syntax=docker/dockerfile:1

# The Node.js version, the same image as the other apps on the VPS (shared layers, one place to update).
# Pinned by digest: a moved tag cannot change what is built. The CI runs the same major ("engines" in package.json).
ARG NODE_IMAGE=node:26.13.1-bookworm-slim@sha256:5df79989ed685e09f0a98019db4cebfb22fb9df1a53c0161664a011f7ff6b0f1

# --- Base of the build stages ---------------------------------------------------------------------------------
FROM ${NODE_IMAGE} AS base
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
# Corepack installs the pnpm named in "packageManager" (so its version is never written twice). It no longer comes
# with Node (since Node 25): from npm, at a fixed version so that every build gets the same one.
ARG COREPACK_VERSION=0.36.0
RUN npm install -g corepack@${COREPACK_VERSION} && corepack enable && mkdir /app && chown node:node /app
# Everything below runs as the image's own unprivileged user.
USER node
WORKDIR /app

# --- Dependencies: only re-run when the lockfile changes ------------------------------------------------------
FROM base AS deps
COPY --chown=node:node package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# The cache mount keeps pnpm's store between builds (CI) without putting it in the image.
RUN --mount=type=cache,id=pnpm,target=/home/node/.local/share/pnpm/store,uid=1000,gid=1000 \
    pnpm install --frozen-lockfile

# --- Build ----------------------------------------------------------------------------------------------------
FROM deps AS build
# Lets Next tell old browser tabs apart from the new deployment (the client reloads instead of calling assets that
# no longer exist). The CI passes the commit SHA.
ARG NEXT_DEPLOYMENT_ID
ENV NEXT_DEPLOYMENT_ID=${NEXT_DEPLOYMENT_ID} \
    NEXT_TELEMETRY_DISABLED=1
COPY --chown=node:node . .
RUN pnpm build

# --- Runtime: the standalone server only, no pnpm, no sources, not root ---------------------------------------
FROM ${NODE_IMAGE} AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    # Every interface of the CONTAINER; the host only publishes the port on 127.0.0.1 (see the compose file).
    HOSTNAME=0.0.0.0
# The standalone output already contains the minimal node_modules it needs.
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
USER node
EXPOSE 3000
# Checks often at first (start-interval) so a deploy is not held back by the slow steady-state interval.
HEALTHCHECK --interval=15s --timeout=3s --start-period=20s --start-interval=1s --retries=3 \
    CMD ["node", "-e", "fetch('http://127.0.0.1:3000/api/health').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"]
CMD ["node", "server.js"]
