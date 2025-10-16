import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { getLocales } from "@/lib/utils";

export const locales = getLocales();

export const routing = defineRouting({
    defaultLocale: "fr",

    locales,
});

export const { getPathname, Link, redirect, usePathname, useRouter } = createNavigation(routing);
