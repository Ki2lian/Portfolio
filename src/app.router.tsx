import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Header from './components/Header';
import { useThemeStore } from './stores/useThemeStore';
import { useEffect } from 'react';

const AppRouter = () => {
    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [ theme ]);

    return (
        <>
            <Header />
            <div className="relative m-auto min-h-full max-w-6xl px-4 pt-20">
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                </Routes>
            </div>
        </>
    );
};

export default AppRouter;
