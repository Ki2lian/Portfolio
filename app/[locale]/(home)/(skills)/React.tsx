import { getTranslations } from "next-intl/server";

import { React as ReactIcon } from "@/components/icons/React";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/components/ui/item";

export const React = async () => {
    const t = await getTranslations("home.skills");

    return (
        <Item className="flex gap-1 md:col-span-1 bg-card shadow-md p-6 border-0">
            <ItemHeader className="justify-center">
                <ReactIcon className="animate-spin-slow" size={ 96 } />
            </ItemHeader>
            <ItemContent className="space-y-5">
                <ItemTitle className="flex items-center text-2xl">
                    <ReactIcon textColor="currentColor" />
                    <span>React</span>
                </ItemTitle>
                <ItemDescription className="text-muted text-base">{ t("react") }</ItemDescription>
            </ItemContent>
        </Item>
    );
};