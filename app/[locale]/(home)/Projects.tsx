"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { ProjectItem } from "@/app/(home)/(projects)/Item";
import { MobileProjectsCarousel } from "@/app/(home)/(projects)/MobileProjectsCarousel";
import { Button } from "@/components/ui/button";
import { ItemGroup } from "@/components/ui/item";
import { useIsMobile } from "@/hooks/useIsMobile";
import { TProjectWithImageValid } from "@/schemas";

interface IProjectsSectionProps {
    projects: TProjectWithImageValid[];
}

export const ProjectsSection = ({ projects }: IProjectsSectionProps) => {
    const t = useTranslations("home.projects");
    const [ showAll, setShowAll ] = useState(false);

    const isMobile = useIsMobile();

    const displayedProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <section className="mx-auto max-w-3xl" id="projects">
            <h2 className="pb-8 text-3xl">{t("title")}</h2>
            {isMobile ? (
                <MobileProjectsCarousel projects={ projects } />
            ) : (
                <>
                    <ItemGroup className="gap-x-4 gap-y-5 grid grid-cols-1 sm:grid-cols-2">
                        {displayedProjects.map((project, idx) => (
                            <motion.div
                                custom={ idx }
                                initial="hidden"
                                key={ idx }
                                variants={{
                                    hidden: { opacity: 0, scale: 0.9 },
                                    visible: (i: number) => ({
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            damping: 30,
                                            delay: i * 0.15,
                                            stiffness: 300,
                                            type: "spring",
                                        },
                                    }),
                                }}
                                viewport={{ amount: 0, once: true }}
                                whileInView="visible"
                            >
                                <ProjectItem project={ project } />
                            </motion.div>
                        ))}
                    </ItemGroup>
                    {projects.length > 4 && (
                        <div className="mt-6 text-center">
                            <Button className="text-base md:text-lg" onClick={ () => setShowAll(!showAll) } variant="outline">
                                {showAll ? t("button.see_less") : t("button.see_all")}
                            </Button>
                        </div>
                    )}
                </>
            )}
        </section>
    );
};
