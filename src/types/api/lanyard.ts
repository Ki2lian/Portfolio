import { Types } from "use-lanyard";

export const isLanyardApiResponse = (x: unknown): x is Types.Presence => {
    if (typeof x !== "object" || x === null) return false;

    const root = x as Record<string, unknown>;
    if (typeof root.success !== "boolean") return false;
    if (typeof root.data !== "object" || root.data === null) return false;

    const data = root.data as Record<string, unknown>;

    for (const key of [ "active_on_discord_mobile", "active_on_discord_desktop", "listening_to_spotify" ]) {
        if (typeof data[key] !== "boolean") return false;
    }

    const user = data.discord_user as Record<string, unknown>;
    if (typeof user !== "object" || user === null) return false;
    if (
        typeof user.username !== "string" ||
        typeof user.public_flags !== "number" ||
        typeof user.id !== "string" ||
        typeof user.discriminator !== "string"
    ) {
        return false;
    }
    if (user.avatar !== null && typeof user.avatar !== "string") return false;

    if (typeof data.discord_status !== "string") return false;

    if (!Array.isArray(data.activities)) return false;
    for (const activity of data.activities) {
        if (typeof activity !== "object" || activity === null) return false;
        const a = activity as Record<string, unknown>;
        if (typeof a.type !== "number" || typeof a.name !== "string" || typeof a.id !== "string") return false;
        if (typeof a.created_at !== "number") return false;
    }

    if ("spotify" in data && data.spotify !== null) {
        const spotify = data.spotify as Record<string, unknown>;
        if (
            typeof spotify.track_id !== "string" ||
            typeof spotify.song !== "string" ||
            typeof spotify.artist !== "string" ||
            typeof spotify.album_art_url !== "string" ||
            typeof spotify.album !== "string"
        ) {
            return false;
        }

        if (typeof spotify.timestamps !== "object" || spotify.timestamps === null) return false;
        const ts = spotify.timestamps as Record<string, unknown>;
        if (typeof ts.start !== "number" || typeof ts.end !== "number") return false;
    }

    return true;
};
