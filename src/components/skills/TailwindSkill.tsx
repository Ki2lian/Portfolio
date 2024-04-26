import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TailwindIcon } from '@/components/icons/TailwindIcon';

export const TailwindSkill: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const { t } = useTranslation();

    return (
        <Card className={ cn('flex flex-col border-0 shadow-md', className) } { ...props } ref={ props.ref as React.RefObject<HTMLDivElement> }>
            <CardHeader>
                <div className="mb-2 h-[96px] w-full rounded-md bg-gradient-to-br from-accent to-blue-500"></div>
                <CardTitle className="flex items-center gap-2">
                    <TailwindIcon />
                    <span>TailwindCSS</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base text-muted">{ t('skills.tailwind') }</CardDescription>
            </CardContent>
        </Card>
    );
};
