import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

import { routing } from "@/i18n/routing";
import { getLocaleFromPathname } from "@/lib/utils";

const intlMiddleware = createIntlMiddleware(routing);

const middleware = (req: NextRequest) => {
    const { nextUrl } = req;
    const rawLocale = getLocaleFromPathname(nextUrl.pathname);

    if (!rawLocale) {
        const cleanPath = nextUrl.pathname.split("/").slice(2).join("/");
        return Response.redirect(new URL(`/${ routing.defaultLocale }/${ cleanPath }`, nextUrl));
    }

    return intlMiddleware(req);
};

export const config = {
    matcher: [
        {
            missing: [
                { key: "next-router-prefetch", type: "header" },
                { key: "purpose", type: "header", value: "prefetch" },
            ],
            source: "/((?!api|_next|.*\\..*).*)",
        },
    ],
};

export default middleware;
