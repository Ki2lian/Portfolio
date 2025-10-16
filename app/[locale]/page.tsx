import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ContactSection } from "@/app/(home)/Contact";
import { HeroSection } from "@/app/(home)/Hero";
import { ProjectsSection } from "@/app/(home)/Projects";
import { SkillsSection } from "@/app/(home)/Skills";
import projectsData from "@/data/projects.json";
import { isLocalImageValid } from "@/lib/image";
import { projectSchema, TProject, TProjectWithImageValid } from "@/schemas";

export const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations("home.metadata");

    return {
        description: t("description"),
        openGraph: {
            description: t("description"),
            title: t("title"),
        },
        title: t("title"),
        twitter: {
            description: t("description"),
            title: t("title"),
        },
    };
};

const HomePage = async () => {
    const projects = validateProjects(projectsData);

    return (
        <div className="space-y-14 lg:space-y-20 py-7 lg:py-10">
            <HeroSection />
            <ProjectsSection projects={ projects } />
            <SkillsSection />
            <ContactSection />
        </div>
    );
};

const validateProjects = (projects: unknown[]): TProjectWithImageValid[] => {
    return projects
        .map((project) => {
            try {
                const validProject = projectSchema.parse(project);
                const isImageValid = validProject.image ? isLocalImageValid(validProject.image) : false;
                return { ...validProject, isImageValid };
            } catch {
                return null;
            }
        })
        .filter((project): project is TProject & { isImageValid: boolean } => project !== null);
};

export default HomePage;
