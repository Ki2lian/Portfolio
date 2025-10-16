import { type ClassValue, clsx } from "clsx";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export interface IOption {
    label: string;
    value: string;
}

export const getAppearanceOptions = (t: ReturnType<typeof useTranslations<"theme">>) => {
    return [
        { label: t("light"), value: "light" },
        { label: t("dark"), value: "dark" },
        { label: t("system"), value: "system" },
    ];
};

export interface ILocaleOption extends IOption {
    flag?: StaticImageData | string;
}

export const getLocaleOptions = (): ILocaleOption[] => {
    return [
        { flag: "/assets/images/flags/en.png", label: "English", value: "en" },
        { flag: "/assets/images/flags/fr.png", label: "Français", value: "fr" },
    ];
};

export const getLocales = () => getLocaleOptions().map(option => option.value);

export const getLocaleFromPathname = (pathname: string): null | string => {
    const locales = getLocales();
    const match = pathname.match(new RegExp(`^(/(${ locales.join("|") }))`));
    return match ? match[1] : null;
};
