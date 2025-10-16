"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { usePathname, useRouter } from "@/i18n/routing";
import { getLocaleOptions, ILocaleOption } from "@/lib/utils";

export const LanguageDropdown = () => {
    const t = useTranslations("locale");
    const localeOptions = getLocaleOptions();

    const [ mounted, setMounted ] = useState(false);
    const [ currentLocale, setCurrentLocale ] = useState<ILocaleOption>();

    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const foundLocale = localeOptions.find((option) => option.value === locale);
        if (foundLocale && foundLocale.value !== currentLocale?.value) {
            setCurrentLocale(foundLocale);
        }
    }, [ locale, localeOptions, currentLocale ]);

    const handleLanguageChange = (newLanguage: string) => {
        router.replace(pathname, { locale: newLanguage, scroll: false });
    };

    if (!mounted) {
        return (
            <Skeleton className="rounded-full size-9" />
        );
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                    {currentLocale?.flag ? <Image alt={ currentLocale.label } className="w-[24px] h-[16px]" height={ 16 } src={ currentLocale.flag } width={ 24 } /> : currentLocale?.label}
                    <span className="sr-only">{t("sr_only")}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-[250px]">
                <DropdownMenuLabel>{t("applicationLanguage")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-normal">{t("setting_applies_to_this_browser_only")}</DropdownMenuLabel>
                <DropdownMenuRadioGroup onValueChange={ handleLanguageChange } value={ locale }>
                    {localeOptions.map((option) => (
                        <DropdownMenuRadioItem key={ option.value } value={ option.value }>
                            {option.label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};