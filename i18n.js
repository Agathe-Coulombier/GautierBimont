import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './public/locales/en/common.json';
import translationFR from './public/locales/fr/common.json';

const resources = {
    en: {
        common: translationEN,
    },
    fr: {
        common: translationFR,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr',
        debug: true,
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            checkWhitelist: true,
            lookupLocalStorage: typeof window !== 'undefined',
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
