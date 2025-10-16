import { getTranslations } from "next-intl/server";

import { Tailwind as TailwindIcon } from "@/components/icons/Tailwind";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/components/ui/item";

export const Tailwind = async () => {
    const t = await getTranslations("home.skills");

    return (
        <Item className="flex gap-1 md:col-span-1 bg-card shadow-md p-6 border-0">
            <ItemHeader className="justify-center">
                <div className="bg-gradient-to-br from-accent to-blue-500 mb-2 rounded-md w-full h-[96px]"></div>
            </ItemHeader>
            <ItemContent className="space-y-5">
                <ItemTitle className="flex items-center text-2xl">
                    <TailwindIcon bgColor="currentColor" />
                    <span>TailwindCSS</span>
                </ItemTitle>
                <ItemDescription className="text-muted text-base">{ t("tailwind") }</ItemDescription>
            </ItemContent>
        </Item>
    );
};