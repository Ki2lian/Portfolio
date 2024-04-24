import { useEffect } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';

export const ThemeManager: React.FC = () => {
    const { theme, setAutoThemeValue, isDark } = useThemeStore();

    useEffect(() => {
        const mediaQueryPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = (newTheme: string) => {
            if (newTheme === 'dark' || (newTheme === 'auto' && isDark())) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        const updateAutoThemeValue = () => {
            setAutoThemeValue(mediaQueryPrefersDark.matches ? 'dark' : 'light');
            applyTheme(theme);
        };

        updateAutoThemeValue();

        mediaQueryPrefersDark.addEventListener('change', updateAutoThemeValue);

        return () => {
            mediaQueryPrefersDark.removeEventListener('change', updateAutoThemeValue);
        };
    }, [ theme, setAutoThemeValue, isDark ]);

    return null;
};