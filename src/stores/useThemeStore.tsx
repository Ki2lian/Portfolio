import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IThemeState {
    theme: 'light' | 'dark' | 'auto';
    toggleTheme: ()=> void;
  }

export const useThemeStore = create<IThemeState>()(
    persist(
        (set, get) => ({
            theme: 'auto',
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
        }),
        {
            name: 'theme',
        },
    ),
);