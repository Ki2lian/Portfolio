import { DiscordJS } from "@/components/icons/DiscordJS";
import { IIconProps } from "@/components/icons/interface";
import { NextJS } from "@/components/icons/NextJS";
import { NodeJS } from "@/components/icons/NodeJS";
import { Prisma } from "@/components/icons/Prisma";
import { React } from "@/components/icons/React";
import { Symfony } from "@/components/icons/Symfony";
import { Tailwind } from "@/components/icons/Tailwind";
import { Typescript } from "@/components/icons/Typescript";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface ITechnologyIconProps extends React.HTMLProps<HTMLDivElement> {
    technology: string;
}

interface IIconMap {
    [key: string]: {
        IconComponent: React.ComponentType<IIconProps & React.SVGProps<SVGSVGElement>>;
        label: string;
    };
}

const iconMap: IIconMap = {
    discordjs: { IconComponent: DiscordJS, label: "Discord.js" },
    nextjs: { IconComponent: NextJS, label: "Next.js" },
    nodejs: { IconComponent: NodeJS, label: "Node.js" },
    prisma: { IconComponent: Prisma, label: "Prisma" },
    react: { IconComponent: React, label: "React" },
    symfony: { IconComponent: Symfony, label: "Symfony" },
    tailwind: { IconComponent: Tailwind, label: "Tailwind CSS" },
    typescript: { IconComponent: Typescript, label: "TypeScript" },
};

export const TechnologyIcon = ({ size, technology }: IIconProps & ITechnologyIconProps) => {
    const icon = iconMap[technology.toLowerCase() as keyof IIconMap];
    if (!icon) return null;
    const IconComponent = icon.IconComponent;
    const label = icon.label;

    return (
        <TooltipProvider delayDuration={ 100 }>
            <Tooltip>
                <TooltipTrigger>
                    <IconComponent className="transition-transform hover:-translate-y-0.5 duration-300 ease-in-out cursor-default" size={ size } />
                </TooltipTrigger>
                <TooltipContent>
                    <p>{ label }</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
