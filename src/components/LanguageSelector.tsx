import { useTranslation } from 'react-i18next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import FRflag from '@/assets/images/flags/fr.png';
import ENflag from '@/assets/images/flags/en.png';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    const renderImageLanguage = (flagSrc: string, altText: string) => (
        <img src={ flagSrc } alt={ altText } className="h-auto w-6" />
    );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size={ 'none' }>
                    { i18n.language === 'en' ? (
                        renderImageLanguage(ENflag, 'English flag')
                    ) : (
                        renderImageLanguage(FRflag, 'French flag')
                    ) }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuItem className="space-x-2" onClick={ () => changeLanguage('fr') }>
                        { renderImageLanguage(FRflag, 'French flag') }
                        <span>Français</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="space-x-2" onClick={ () => changeLanguage('en') }>
                        { renderImageLanguage(ENflag, 'English flag') }
                        <span>English</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSelector;
