import { useTranslation } from 'react-i18next';
import { ProjectSchema, TProject } from './ProjectInterface';
import { ProjectItem } from './ProjectItem';
import projectsData from './Projects.json';

const validateProjects = (projects: unknown[]): TProject[] => {
    return projects
        .map((project, idx) => {
            try {
                const validProject = ProjectSchema.parse(project);
                return validProject;
            } catch (error) {
                console.error(`Invalid project data at index ${ idx }:`, error);
                return null;
            }
        })
        .filter((project): project is TProject => project !== null);
};

export const ProjectsSection: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const projects: TProject[] = validateProjects(projectsData);
    const { t } = useTranslation();

    return (
        <section className={ className } { ...props }>
            <h2 className="text-2xl">{ t('projects.title') }</h2>
            <div className="grid grid-cols-1 gap-x-4 gap-y-5 pt-8 sm:grid-cols-2">
                { projects.map((project, idx) => (
                    <ProjectItem key={ idx } project={ project } className="transition-transform duration-300 ease-in-out hover:scale-105" />
                )) }
            </div>
        </section>
    );
};
