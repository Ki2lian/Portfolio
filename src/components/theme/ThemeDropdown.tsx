"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { LuMoon, LuSun, LuSunMoon } from "react-icons/lu";

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
import { getAppearanceOptions, IOption } from "@/lib/utils";

export const ThemeDropdown = () => {
    const t = useTranslations("theme");
    const appearanceOptions: IOption[] = useMemo(() => getAppearanceOptions(t), [ t ]);

    const { setTheme, theme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <Skeleton className="rounded-full size-9" />;
    }

    let icon;
    switch (theme) {
        case "dark":
            icon = <LuMoon className="size-6!" />;
            break;
        case "light":
            icon = <LuSun className="size-6!" />;
            break;
        default:
            icon = <LuSunMoon className="size-6!" />;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                    {icon}
                    <span className="sr-only">{t("sr_only")}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-w-[250px]">
                <DropdownMenuLabel>{t("appearance")}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="font-normal">{t("setting_applies_to_this_browser_only")}</DropdownMenuLabel>
                <DropdownMenuRadioGroup onValueChange={ setTheme } value={ theme }>
                    {appearanceOptions.map(option => (
                        <DropdownMenuRadioItem key={ option.value } value={ option.value }>
                            {option.label}
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
