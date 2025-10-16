import { getTranslations } from "next-intl/server";

import { Fastify } from "@/components/icons/Fastify";
import { NextJS } from "@/components/icons/NextJS";
import { Symfony } from "@/components/icons/Symfony";
import { Item, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/components/ui/item";

export const Backend = async () => {
    const t = await getTranslations("home.skills.backend");

    return (
        <Item className="flex gap-1 md:col-span-2 bg-card shadow-md p-6 border-0">
            <ItemHeader className="justify-center">
                <div className="flex justify-center space-x-4 sm:space-x-14 mb-2">
                    <div className="flex flex-col gap-y-2">
                        <NextJS size={ 96 } />
                        <span className="text-center">Next.js</span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Symfony size={ 96 } />
                        <span className="text-center">Symfony</span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Fastify size={ 96 } />
                        <span className="text-center">Fastify</span>
                    </div>
                </div>
            </ItemHeader>
            <ItemContent className="space-y-5">
                <ItemTitle className="flex items-center text-2xl">{ t("title") }</ItemTitle>
                <ItemDescription className="text-muted text-base">{ t("description") }</ItemDescription>
            </ItemContent>
        </Item>
    );
};