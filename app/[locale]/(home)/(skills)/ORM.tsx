import { getTranslations } from "next-intl/server";

import { Doctrine } from "@/components/icons/Doctrine";
import { Prisma } from "@/components/icons/Prisma";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/components/ui/item";

export const ORM = async () => {
    const t = await getTranslations("home.skills");

    return (
        <Item className="flex gap-1 md:col-span-1 bg-card shadow-md p-6 border-0">
            <ItemHeader className="justify-center">
                <div className="flex justify-center space-x-4 mb-2">
                    <div className="flex flex-col gap-y-2">
                        <Doctrine size={ 96 } />
                        <span className="text-center">Doctrine</span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Prisma size={ 96 } />
                        <span className="text-center">Prisma</span>
                    </div>
                </div>
            </ItemHeader>
            <ItemContent className="space-y-5">
                <ItemTitle className="flex items-center text-2xl">ORM</ItemTitle>
                <ItemDescription className="text-muted text-base">{ t("orm") }</ItemDescription>
            </ItemContent>
        </Item>
    );
};