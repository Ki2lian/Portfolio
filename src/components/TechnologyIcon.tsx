import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { IIconProps } from '@/components/icons/IconInterface';
import { TypescriptIcon } from '@/components/icons/TypescriptIcon';
import { ReactIcon } from '@/components/icons/ReactIcon';
import { TailwindIcon } from '@/components/icons/TailwindIcon';
import { NextjsIcon } from '@/components/icons/NextjsIcon';
import { SymfonyIcon } from '@/components/icons/SymfonyIcon';

export interface ITechnologyIconProps extends React.HTMLProps<HTMLDivElement> {
    technology: string;
}

interface IIconMap {
    [key: string]: {
      IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement> & IIconProps>;
      label: string;
    };
  }

const iconMap: IIconMap = {
    react: { IconComponent: ReactIcon, label: 'React' },
    typescript: { IconComponent: TypescriptIcon, label: 'TypeScript' },
    tailwind: { IconComponent: TailwindIcon, label: 'Tailwind CSS' },
    nextjs: { IconComponent: NextjsIcon, label: 'Next.js' },
    symfony: { IconComponent: SymfonyIcon, label: 'Symfony' },
};

export const TechnologyIcon: React.FC<ITechnologyIconProps & IIconProps> = ({ technology, bgColor, textColor, size }) => {
    const icon = iconMap[technology.toLowerCase() as keyof IIconMap];
    if (!icon) return null;
    const IconComponent = icon.IconComponent;
    const label = icon.label;

    return (
        <TooltipProvider delayDuration={ 100 }>
            <Tooltip>
                <TooltipTrigger>
                    <IconComponent className="cursor-default transition-transform duration-300 ease-in-out hover:-translate-y-0.5" size={ size } bgColor={ bgColor } textColor={ textColor } />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{ label }</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
