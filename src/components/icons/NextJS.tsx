import { ComponentPropsWithoutRef } from "react";

import { IIconProps } from "@/components/icons/interface";

export const NextJS = ({ bgColor, size, textColor, ...props }: ComponentPropsWithoutRef<"svg"> & IIconProps) => (
    <svg height={ size || 24 } preserveAspectRatio="xMidYMid" version="1.1" viewBox="0 0 256 256" width={ size || 24 } { ...props }>
        <defs>
            <circle cx="128" cy="128" id="path-1" r="128"></circle>
            <linearGradient id="nextjsLinearGradient-3" x1="55.6325605%" x2="83.2279093%" y1="56.3850422%" y2="96.0801119%">
                <stop offset="0%" stopColor={ textColor || "#FFFFFF" }></stop>
                <stop offset="100%" stopColor={ textColor || "#FFFFFF" } stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient id="nextjsLinearGradient-4" x1="50%" x2="49.9534722%" y1="0%" y2="73.4375%">
                <stop offset="0%" stopColor={ textColor || "#FFFFFF" }></stop>
                <stop offset="100%" stopColor={ textColor || "#FFFFFF" } stopOpacity="0"></stop>
            </linearGradient>
        </defs>
        <g>
            <mask fill="white" id="mask-2">
                <use xlinkHref="#path-1"></use>
            </mask>
            <g mask="url(#mask-2)">
                <circle cx="128" cy="128" fill={ bgColor || "#000000" } r="128"></circle>
                <path
                    d="M212.6336,224.028444 L98.3352889,76.8 L76.8,76.8 L76.8,179.157333 L94.0282311,179.157333 L94.0282311,98.6788978 L199.109689,234.446222 C203.851378,231.273244 208.368356,227.790222 212.6336,224.028444 Z"
                    fill="url(#nextjsLinearGradient-3)"
                ></path>
                <rect fill="url(#nextjsLinearGradient-4)" height="102.4" width="17.0666667" x="163.555556" y="76.8"></rect>
            </g>
        </g>
    </svg>
);
