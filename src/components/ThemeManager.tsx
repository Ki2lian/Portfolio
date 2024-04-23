import { useEffect } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';

export const ThemeManager: React.FC = () => {
    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        const mediaQueryPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = (newTheme: string) => {
            if (newTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        const updateTheme = () => {
            const currentTheme = useThemeStore.getState().theme;

            if (currentTheme === 'auto') {
                applyTheme(mediaQueryPrefersDark.matches ? 'dark' : 'light');
            }
        };

        if (theme != 'auto') {
            applyTheme(theme);
        } else {
            updateTheme();
        }

        mediaQueryPrefersDark.addEventListener('change', updateTheme);

        return () => {
            mediaQueryPrefersDark.removeEventListener('change', updateTheme);
        };
    }, [ theme ]);

    return null;
};