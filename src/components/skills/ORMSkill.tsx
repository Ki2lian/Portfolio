import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DoctrineIcon } from '../icons/DoctrineIcon';
import { PrismaIcon } from '../icons/PrismaIcon';

export const ORMSkill: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const { t } = useTranslation();

    return (
        <Card className={ cn('flex flex-col border-0 shadow-md', className) } { ...props } ref={ props.ref as React.RefObject<HTMLDivElement> }>
            <CardHeader>
                <div className="mb-2 flex justify-center space-x-4">
                    <div className="flex flex-col gap-y-2">
                        <DoctrineIcon size={ 96 } />
                        <span className="text-center">Doctrine</span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <PrismaIcon size={ 96 } />
                        <span className="text-center">Prisma</span>
                    </div>
                </div>
                <CardTitle>ORM</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base text-muted">{ t('skills.orm') }</CardDescription>
            </CardContent>
        </Card>
    );
};
