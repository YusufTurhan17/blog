import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const defaultLanguage =
  window.navigator.userLanguage || window.navigator.language;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/assets/locales/{{lng}}.json",
    },
    fallbackLng: "tr",
    lng: defaultLanguage.replace(/-.*$/i, ""),
    debug: false,
  });
