import { getTranslations } from "next-intl/server";

import { Lanyard } from "@/app/(home)/(lanyard)/Lanyard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export const HeroSection = async () => {
    const t = await getTranslations("home.hero");

    return (
        <section className="mx-auto max-w-3xl">
            <h1 className="sr-only">{ t("sr_only") }</h1>
            <div className="flex flex-col justify-center">
                <div className="flex items-center gap-8">
                    <div className="relative">
                        <Avatar className="size-16">
                            <AvatarImage alt="Avatar" height={ 64 } src="/assets/images/home/avatar.svg" width={ 64 } />
                            <AvatarFallback>
                                <Skeleton className="size-16" />
                            </AvatarFallback>
                        </Avatar>
                        <Lanyard />
                    </div>
                    <div className="flex flex-col justify-center space-y-3">
                        <h1 className="bg-linear-45 from-[#c7c940] to-[#94a7e0] font-bold text-gradient text-4xl">Killian</h1>
                        <h3>{ t("job") }</h3>
                    </div>
                </div>
                <div className="flex flex-col pt-8">
                    <p className="text-muted md:text-lg">{ t("description") }</p>
                </div>
            </div>
        </section>
    );
};
