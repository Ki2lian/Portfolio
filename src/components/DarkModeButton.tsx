import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '@/stores/useThemeStore';
import { Button } from '@/components/ui/button';

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
