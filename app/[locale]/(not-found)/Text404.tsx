"use client";

import { useEffect, useState } from "react";

import { inter, lato, merriweather, montserrat, oswald, playfair, poppins, raleway, roboto, ubuntu } from "@/app/(not-found)/fonts";

const fonts = [
    inter.style.fontFamily,
    roboto.style.fontFamily,
    lato.style.fontFamily,
    montserrat.style.fontFamily,
    oswald.style.fontFamily,
    poppins.style.fontFamily,
    raleway.style.fontFamily,
    merriweather.style.fontFamily,
    ubuntu.style.fontFamily,
    playfair.style.fontFamily,
    "Arial",
    "Verdana",
    "Helvetica",
    '"Times New Roman"',
    "Georgia",
    '"Courier New"',
    "Tahoma",
    '"Trebuchet MS"',
    "Impact",
    '"Comic Sans MS"',
];

export const Text404 = () => {
    const [ digits ] = useState([ "4", "0", "4" ]);
    const [ digitFonts, setDigitFonts ] = useState([ fonts[0], fonts[0], fonts[0] ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDigitFonts(digits.map(() => fonts[Math.floor(Math.random() * fonts.length)]));
        }, 400);

        return () => clearInterval(interval);
    }, [ digits ]);

    return (
        <div className="text-[6rem] md:text-[7.5rem] lg:text-[10rem] select-none">
            {digits.map((digit, index) => (
                <span className="transition-all duration-500" key={ index } style={{ fontFamily: digitFonts[index] }}>
                    {digit}
                </span>
            ))}
        </div>
    );
};
