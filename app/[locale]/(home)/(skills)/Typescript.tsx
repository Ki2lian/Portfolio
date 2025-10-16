"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Typescript as TypescriptIcon } from "@/components/icons/Typescript";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/components/ui/item";

export const Typescript = () => {
    const t = useTranslations("home.skills");

    const { resolvedTheme } = useTheme();

    return (
        <Item className="flex gap-1 md:col-span-1 bg-card shadow-md p-6 border-0">
            <ItemHeader className="justify-center">
                <TypescriptIcon size={ 96 } />
            </ItemHeader>
            <ItemContent className="space-y-5">
                <ItemTitle className="flex items-center text-2xl">
                    <TypescriptIcon bgColor="currentColor" textColor={ resolvedTheme === "dark" ? "#000" : "#FFF" } />
                    <span>TypeScript</span>
                </ItemTitle>
                <ItemDescription className="text-muted text-base">{ t("typescript") }</ItemDescription>
            </ItemContent>
        </Item>
    );
};