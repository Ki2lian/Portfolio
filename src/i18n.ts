import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import frJSON from './locales/fr.json';
import enJSON from './locales/en.json';

const options = {
    lookupLocalStorage: 'lang',
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next).init({
        resources: {
            fr: { ...frJSON },
            en: { ...enJSON },
        },
        fallbackLng: 'fr',
        detection: options,
        interpolation: {
            escapeValue: false,
        },
    });