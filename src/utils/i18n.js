import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enJSON from "../locale/en.json";
import ruJSON from "../locale/ru.json";
import uzJSON from "../locale/uz.json";

const resources = {
  en: {
    translation: enJSON,
  },
  uz: {
    translation: uzJSON,
  },
  ru: {
    translation: ruJSON,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
