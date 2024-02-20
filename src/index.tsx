import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './app.router';

import './i18n';
import './index.scss';

const root = createRoot(document.getElementById('root') as Element);

root.render(
    <Router>
        <AppRouter />
    </Router>,
);
