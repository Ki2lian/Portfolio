"use client";

import { useTranslations } from "next-intl";
import { Types, useLanyardWS } from "use-lanyard";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface IStatusProps {
    readonly initialData: Types.Presence;
}

export const Status = ({ initialData }: IStatusProps) => {
    const t = useTranslations("home.hero.status");

    const data = useLanyardWS("253176119921082369", { initialData });
    const isOnline = data.discord_status !== "offline";

    return (
        <Tooltip>
            <TooltipTrigger className={ cn("rounded-full size-3", isOnline ? "bg-green-500" : "bg-gray-500") }></TooltipTrigger>
            <TooltipContent>{isOnline ? t("online") : t("offline")}</TooltipContent>
        </Tooltip>
    );
};
