"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

import { LanguageDropdown } from "@/components/locale/LanguageDropdown";
import { ThemeDropdown } from "@/components/theme/ThemeDropdown";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/routes";

export const Header = () => {
    const t = useTranslations("header");

    const isMobile = useIsMobile();

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen && isMobile) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [ isMenuOpen, isMobile ]);

    useEffect(() => {
        if (!isMobile) {
            setIsMenuOpen(false);
        }
    }, [ isMobile ]);

    return (
        <header className={ cn("top-0 left-0 z-10 fixed shadow-lg p-6 w-full", { "backdrop-blur-md": !isMenuOpen }) }>
            <div className="relative flex justify-between items-center m-auto max-w-3xl min-h-full">
                <Link href={ ROUTES.HOME }>
                    <h1 className="font-bold">Ki2lian</h1>
                </Link>
                <div className="hidden md:flex">
                    <NavigationMenu aria-label="Navigation">
                        <NavigationMenuList className="flex space-x-6">
                            <NavigationMenuItem>
                                <Link href="#projects">{ t("projects") }</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="#skills">{ t("skills") }</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="#contact">{ t("contact") }</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <LanguageDropdown />
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <ThemeDropdown />
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="md:hidden flex space-x-3">
                    <LanguageDropdown />
                    <ThemeDropdown />
                    <Button onClick={ toggleMenu } size="none" variant="ghost">
                        <LuMenu className="!size-6" />
                    </Button>
                    { isMenuOpen && (
                        <div className="z-50 fixed inset-0">
                            <div className="absolute inset-0 backdrop-blur-md" onClick={ toggleMenu }></div>
                            <div className="top-0 right-0 absolute bg-card shadow-lg w-[80%] max-w-[300px] h-full animate-swipe-from-right">
                                <div className="flex justify-between items-center px-8 py-6">
                                    <h1 className="font-bold">Ki2lian</h1>
                                    <Button onClick={ toggleMenu } variant="ghost">
                                        <LuX className="!size-6" />
                                    </Button>
                                </div>
                                <Separator className="mx-auto !w-[90%]" />
                                <NavigationMenu className="p-3 pt-8 max-w-none">
                                    <NavigationMenuList className="flex-col items-baseline gap-6">
                                        <NavigationMenuItem>
                                            <Link className="text-2xl" href="#projects">{ t("projects") }</Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link className="text-2xl" href="#skills">{ t("skills") }</Link>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <Link className="text-2xl" href="#contact">{ t("contact") }</Link>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </header>
    );
};
