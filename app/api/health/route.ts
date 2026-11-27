// Liveness probe for the container HEALTHCHECK and the deploy script. Kept free of any
// dependency (no i18n, no data) so it only tells whether the server itself answers.
export const dynamic = "force-dynamic";

export const GET = () => new Response("ok", {
    headers: { "Cache-Control": "no-store" },
});
