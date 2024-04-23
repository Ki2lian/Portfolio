import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Header from './components/Header';
import { ThemeManager } from './components/ThemeManager';

const AppRouter = () => {
    return (
        <>
            <ThemeManager />
            <Header />
            <div className="relative m-auto min-h-full max-w-4xl px-4 pt-20">
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                </Routes>
            </div>
        </>
    );
};

export default AppRouter;
