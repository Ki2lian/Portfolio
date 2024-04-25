import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactIcon } from '@/components/icons/ReactIcon';
import { cn } from '@/lib/utils';

export const ReactSkill: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const { t } = useTranslation();

    return (
        <Card className={ cn('flex flex-col border-0 shadow-md', className) } { ...props } ref={ props.ref as React.RefObject<HTMLDivElement> }>
            <CardHeader>
                <div className="mb-2 flex justify-center">
                    <ReactIcon className="animate-spin-slow" size={ 96 } />
                </div>
                <CardTitle className="flex items-center gap-2">
                    <ReactIcon textColor="currentColor" />
                    <span>React</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base text-muted">{ t('skills.react') }</CardDescription>
            </CardContent>
        </Card>
    );
};
