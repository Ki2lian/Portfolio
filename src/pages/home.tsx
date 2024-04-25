import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { SkillsSection } from '@/components/skills/SkillsSection';

export const HomePage = () => {
    return (
        <>
            <HeroSection className="relative m-auto max-w-3xl py-5 lg:py-7" />
            <ProjectsSection className="relative m-auto max-w-3xl py-5 lg:py-7" id="projects" />
            <SkillsSection className="py-5 lg:py-7" id="skills" />
        </>
    );
};

export default HomePage;
