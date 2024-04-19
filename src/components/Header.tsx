import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import DarkModeButton from './DarkModeButton';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
    const { t } = useTranslation();
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed left-0 top-0 z-10 w-full bg-background p-4 shadow-lg">
            <div className="relative m-auto flex min-h-full max-w-3xl items-center justify-between">
                <Link to="/">
                    <h1 className="font-bold">Ki2lian</h1>
                </Link>
                <div className="flex space-x-3 md:hidden">
                    <LanguageSelector />
                    <DarkModeButton />
                    <Button onClick={ toggleMenu } size={ 'none' }>
                        <Menu size={ 32 } />
                    </Button>
                    { isMenuOpen && (
                        <div className="fixed inset-0 z-10 backdrop-blur-sm" onClick={ toggleMenu }>
                            <NavigationMenu aria-label="Navigation" className="ml-auto flex h-full min-w-[200px] animate-swipe-from-left flex-col items-end justify-center gap-8 bg-card p-8">
                                <Button size={ 'none' } className="absolute right-4 top-4">
                                    <X size={ 32 } />
                                </Button>
                                <NavigationMenuList className="flex-col items-baseline gap-6">
                                    <NavigationMenuItem>
                                        <Link to="#skills" className="text-2xl">{ t('navbar.skills') }</Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link to="#projects" className="text-2xl">{ t('navbar.projects') }</Link>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link to="#contact" className="text-2xl">{ t('navbar.contact') }</Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    ) }
                </div>
                <div className="hidden md:flex">
                    <NavigationMenu aria-label="Navigation">
                        <NavigationMenuList className="flex space-x-6">
                            <NavigationMenuItem>
                                <Link to="#skills">{ t('navbar.skills') }</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="#projects">{ t('navbar.projects') }</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="#contact">{ t('navbar.contact') }</Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <LanguageSelector />
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <DarkModeButton />
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
