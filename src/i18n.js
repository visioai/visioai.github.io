import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Backend)
    // detect user language
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        react: {
            useSuspense: true,
        },
        // lng: localStorage.getItem("i18nextLng") || "en-US",
        fallbackLng: "en", // use en if detected lng is not available
        debug: true,

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        //defaultNS: 'translation',
        // auto load all translation files
        //backend: {
        //loadPath: '/locales/{{lng}}/{{ns}}.json'
        //}
    });

export default i18n;
