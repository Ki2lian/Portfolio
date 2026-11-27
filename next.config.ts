import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    // Self-contained server (only the files it needs) so the Docker image stays small.
    output: "standalone",
    poweredByHeader: false,
};

export default withNextIntl(nextConfig);
