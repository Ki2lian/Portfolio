import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';

export const HomePage = () => {
    return (
        <>
            <HeroSection className="relative m-auto max-w-3xl py-5 lg:py-7" />
            <ProjectsSection className="relative m-auto max-w-3xl py-5 lg:py-7" id="projects" />
        </>
    );
};

export default HomePage;
