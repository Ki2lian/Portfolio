import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';

export const HomePage = () => {
    return (
        <>
            <HeroSection className="py-5 lg:py-7" />
            <ProjectsSection className="py-5 lg:py-7" />
        </>
    );
};

export default HomePage;
