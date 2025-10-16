"use client";

import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa6";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const DiscordCopyButton = () => {
    const t = useTranslations("home.contact");

    const [ isCopied, setIsCopied ] = useState(false);
    const [ open, setOpen ] = useState(false);

    const [ _, copyToClipboard ] = useCopyToClipboard();

    const handleCopy = (event: React.MouseEvent) => {
        event.preventDefault();
        copyToClipboard("ki2lian");
        setIsCopied(true);
        setOpen(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <TooltipProvider delayDuration={ 100 }>
            <Tooltip onOpenChange={ setOpen } open={ open }>
                <TooltipTrigger onClick={ handleCopy }>
                    <FaDiscord className="hover:scale-110 transition-transform cursor-pointer" size={ 36 } />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{ isCopied ? t("tooltip.copied") : t("tooltip.copy") }</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default DiscordCopyButton;
