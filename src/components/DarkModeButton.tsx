import { useThemeStore } from '@/stores/useThemeStore';
import { Button } from './ui/button';
import { Moon, Sun } from 'lucide-react';

const DarkModeButton = () => {
    const toggleTheme = useThemeStore((state) => state.toggleTheme);
    const theme = useThemeStore((state) => state.theme);

    return (
        <Button onClick={ toggleTheme } size="none">
            { theme === 'dark' ? <Sun size={ 24 } /> : <Moon size={ 24 } /> }
        </Button>
    );
};

export default DarkModeButton;
