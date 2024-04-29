import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from '@/components/ui/card';
import { SquareArrowOutUpRight } from 'lucide-react';
import { IProjectItemProps } from './ProjectInterface';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TechnologyIcon } from '../TechnologyIcon';

const LivePreviewContent = () => {
    const { t } = useTranslation();
    return (
        <>
            <span>
                <SquareArrowOutUpRight size={ 24 } />
            </span>
            <span>{ t('projects.button.livePreview') }</span>
        </>
    );
};

const ViewCodeContent = () => {
    const { t } = useTranslation();
    return (
        <>
            <span>
                <GithubIcon size={ 24 } />
            </span>
            <span>{ t('projects.button.viewCode') }</span>
        </>
    );
};

export const ProjectItem: React.FC<IProjectItemProps> = ({ project, className, ...props }) => {
    const { t } = useTranslation();

    const image = project.image ? project.image : 'https://placehold.co/360x160/EEE/31343C';

    const titleKey = `projects.project.${ project.id }.title`;
    const title = t(titleKey) !== titleKey ? t(titleKey) : project.title;

    const descriptionKey = `projects.project.${ project.id }.description`;
    const description = t(descriptionKey) !== descriptionKey ? t(descriptionKey) : project.description;

    return (
        <Card className={ cn('border-0 shadow-md flex flex-col', className) } { ...props } ref={ props.ref as React.RefObject<HTMLDivElement> }>
            <CardImage src={ image } alt={ project.title } />
            <div className="flex grow flex-col">
                <CardHeader>
                    <CardTitle>{ title }</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-base text-foreground">{ description }</CardDescription>
                </CardContent>
            </div>
            <CardFooter className="flex-col gap-y-2">
                <div className="flex w-full justify-start gap-x-2">
                    { project.technologies && project.technologies.map((technology, idx) => (
                        <TechnologyIcon key={ idx } technology={ technology } />
                    )) }
                </div>
                <div className="flex items-center justify-center">
                    { project.livePreviewLink ? (
                        <Link to={ project.livePreviewLink } target="_blank" rel="noopener noreferrer" className={ cn(buttonVariants({ variant: 'link' }), 'gap-2 text-lg') }>
                            <LivePreviewContent />
                        </Link>
                    ) : (
                        <Button variant="disabled" className="gap-2 text-lg">
                            <LivePreviewContent />
                        </Button>
                    ) }
                    { project.sourceCodeLink ? (
                        <Link to={ project.sourceCodeLink } target="_blank" rel="noopener noreferrer" className={ cn(buttonVariants({ variant: 'link' }), 'gap-2 text-lg') }>
                            <ViewCodeContent />
                        </Link>
                    ) : (
                        <Button variant="disabled" className="gap-2 text-lg">
                            <ViewCodeContent />
                        </Button>
                    ) }
                </div>
            </CardFooter>
        </Card>
    );
};
