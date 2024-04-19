import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Navbar from './components/navbar';

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <div className="relative m-auto min-h-full max-w-6xl px-4 pt-20">
                <Routes>
                    <Route path="/" element={ <HomePage /> } />
                </Routes>
            </div>
        </>
    );
};

export default AppRouter;
