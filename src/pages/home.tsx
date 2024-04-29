import { ContactSection } from '@/components/ContactSection';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { SkillsSection } from '@/components/skills/SkillsSection';

export const HomePage = () => {
    return (
        <>
            <HeroSection className="relative m-auto max-w-3xl py-7 lg:py-10" />
            <ProjectsSection className="relative m-auto max-w-3xl py-7 lg:py-10" id="projects" />
            <SkillsSection className="py-7 lg:py-10" id="skills" />
            <ContactSection className="relative m-auto mb-7 max-w-3xl py-7 lg:mb-10 lg:py-10" id="contact" />
        </>
    );
};

export default HomePage;
