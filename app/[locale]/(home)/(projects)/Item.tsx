"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

import { TechnologyIcon } from "@/app/(home)/(projects)/TechnologyIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import { Item, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemTitle } from "@/components/ui/item";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { IProjectItemProps } from "@/schemas";

const LivePreviewContent = () => {
    const t = useTranslations("home.projects");

    return (
        <>
            <span>
                <LuSquareArrowOutUpRight className="size-4 md:size-5" />
            </span>
            <span>{t("button.livePreview")}</span>
        </>
    );
};

const ViewCodeContent = () => {
    const t = useTranslations("home.projects");

    return (
        <>
            <span>
                <FaGithub className="size-4 md:size-5" />
            </span>
            <span>{t("button.viewCode")}</span>
        </>
    );
};

export const ProjectItem = ({ project, ...props }: IProjectItemProps) => {
    const locale = useLocale();

    const title = project.title[locale];
    const description = project.description[locale];

    return (
        <Item
            className="flex flex-col bg-card shadow-md p-0 border-0 min-h-full hover:scale-105 transition-transform duration-300 ease-in-out"
            key={ props.key }
        >
            {project.isImageValid && project.image ? (
                <ItemHeader className="relative w-full aspect-[2.2/1]">
                    <Image
                        alt={ title }
                        className="rounded-t-lg object-cover select-none"
                        draggable={ false }
                        fill
                        priority
                        src={ project.image }
                    />
                </ItemHeader>
            ) : null}
            <div className="flex flex-col flex-1">
                <ItemContent className="flex flex-col space-y-5 px-6 pt-6 pb-0">
                    <ItemTitle className="text-2xl">{title}</ItemTitle>
                    <ItemDescription className="flex-grow text-foreground text-base">{description}</ItemDescription>
                </ItemContent>
                <ItemFooter className="flex-col gap-y-2 px-6 pt-6 pb-6">
                    <div className="flex justify-start gap-x-2 w-full">
                        {project.technologies &&
                            project.technologies.map((technology, idx) => (
                                <TechnologyIcon key={ idx } technology={ technology } />
                            ))}
                    </div>
                    <div className="flex md:flex-row flex-col justify-center items-center gap-x-4 w-full">
                        {project.livePreviewLink ? (
                            <Link
                                className={ cn(
                                    buttonVariants({ variant: "link" }),
                                    "gap-2 text-base md:text-lg w-full md:w-fit",
                                ) }
                                href={ project.livePreviewLink }
                                onClick={ (e) => e.stopPropagation() }
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <LivePreviewContent />
                            </Link>
                        ) : (
                            <Button className="gap-2 text-lg" variant="disabled">
                                <LivePreviewContent />
                            </Button>
                        )}
                        {project.sourceCodeLink ? (
                            <Link
                                className={ cn(
                                    buttonVariants({ variant: "link" }),
                                    "gap-2 text-base md:text-lg w-full md:w-fit",
                                ) }
                                href={ project.sourceCodeLink }
                                onClick={ (e) => e.stopPropagation() }
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <ViewCodeContent />
                            </Link>
                        ) : (
                            <Button className="gap-2 text-lg" variant="disabled">
                                <ViewCodeContent />
                            </Button>
                        )}
                    </div>
                </ItemFooter>
            </div>
        </Item>
    );
};
