import { getTranslations } from "next-intl/server";

import { Backend } from "@/app/(home)/(skills)/Backend";
import { ORM } from "@/app/(home)/(skills)/ORM";
import { React } from "@/app/(home)/(skills)/React";
import { Tailwind } from "@/app/(home)/(skills)/Tailwind";
import { Typescript } from "@/app/(home)/(skills)/Typescript";
import { ItemGroup } from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";
import { ClientOnly } from "@/components/utils/ClientOnly";

export const SkillsSection = async () => {
    const t = await getTranslations("home.skills");

    return (
        <section id="skills">
            <h2 className="relative m-auto max-w-3xl text-3xl">{t("title")}</h2>
            <ItemGroup className="gap-x-4 gap-y-5 grid grid-cols-1 md:grid-cols-3 pt-8">
                <React />
                <Tailwind />
                <ClientOnly fallback={ <Skeleton /> }>
                    <Typescript />
                </ClientOnly>
                <Backend />
                <ORM />
            </ItemGroup>
        </section>
    );
};
