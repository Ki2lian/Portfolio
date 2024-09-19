import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { useThemeStore } from '@/stores/useThemeStore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TypescriptIcon } from '@/components/icons/TypescriptIcon';

export const TypescriptSkill: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const { t } = useTranslation();
    const { isDark } = useThemeStore();
    return (
        <Card className={ cn('flex flex-col border-0 shadow-md', className) } { ...props } ref={ props.ref as React.RefObject<HTMLDivElement> }>
            <CardHeader>
                <div className="mb-2 flex justify-center">
                    <TypescriptIcon size={ 96 } />
                </div>
                <CardTitle className="flex items-center gap-2">
                    <TypescriptIcon bgColor="currentColor" textColor={ isDark() ? '#000' : '#FFF' } />
                    <span>TypeScript</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base text-muted">{ t('skills.typescript') }</CardDescription>
            </CardContent>
        </Card>
    );
};
