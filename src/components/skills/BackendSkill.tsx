import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { SymfonyIcon } from '../icons/SymfonyIcon';
import { FastifyIcon } from '../icons/FastifyIcon';
import { NextjsIcon } from '../icons/NextjsIcon';

export const BackendSkill: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
    const { t } = useTranslation();

    return (
        <Card className={ cn('flex flex-col border-0 shadow-md', className) } { ...props } ref={ props.ref as React.RefObject<HTMLDivElement> }>
            <CardHeader>
                <div className="mb-2 flex justify-center space-x-4 sm:space-x-14">
                    <div className="flex flex-col gap-y-2">
                        <SymfonyIcon size={ 96 } />
                        <span className="text-center">Symfony</span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <FastifyIcon size={ 96 } />
                        <span className="text-center">Fastify</span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <NextjsIcon size={ 96 } />
                        <span className="text-center">Next.js</span>
                    </div>
                </div>
                <CardTitle>{ t('skills.backendTitle') }</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-base text-muted">{ t('skills.backend') }</CardDescription>
            </CardContent>
        </Card>
    );
};
