import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IThemeState {
    theme: 'light' | 'dark' | 'auto';
    autoThemeValue: 'light' | 'dark';
    toggleTheme: ()=> void;
    setAutoThemeValue: (mode: IThemeState['autoThemeValue'])=> void;
    isDark: ()=> boolean;
    isLight: ()=> boolean;
}

export const useThemeStore = create<IThemeState>()(
    persist(
        (set, get) => ({
            theme: 'auto',
            autoThemeValue: 'light',
            toggleTheme: () => {
                const currentTheme = get().theme;
                let newTheme: IThemeState['theme'];

                if (currentTheme === 'light') {
                    newTheme = 'dark';
                } else if (currentTheme === 'dark') {
                    newTheme = 'auto';
                } else {
                    newTheme = 'light';
                }

                set({ theme: newTheme });
            },
            setAutoThemeValue: (value: IThemeState['autoThemeValue']) => set({ autoThemeValue: value }),
            isDark: () => {
                const { theme, autoThemeValue } = get();
                return theme === 'dark' || (theme === 'auto' && autoThemeValue === 'dark');
            },
            isLight: () => {
                const { theme, autoThemeValue } = get();
                return theme === 'light' || (theme === 'auto' && autoThemeValue === 'light');
            },
        }),
        {
            name: 'theme',
        },
    ),
);