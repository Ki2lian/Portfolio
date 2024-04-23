import { Moon, Sun, SunMoon } from 'lucide-react';
import { useThemeStore } from '@/stores/useThemeStore';
import { Button } from '@/components/ui/button';

const DarkModeButton = () => {
    const toggleTheme = useThemeStore(state => state.toggleTheme);
    const theme = useThemeStore(state => state.theme);

    let icon = null;

    switch (theme) {
    case 'dark':
        icon = <Sun size={ 24 } />;
        break;
    case 'light':
        icon = <Moon size={ 24 } />;
        break;
    case 'auto':
        icon = <SunMoon size={ 24 } />;
        break;
    default:
        icon = null;
    }

    return (
        <Button onClick={ toggleTheme } size="none">{ icon }</Button>
    );
};

export default DarkModeButton;
