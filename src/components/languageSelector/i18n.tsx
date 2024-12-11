import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./locales/en";
import si from "./locales/si";
import ta from "./locales/ta";

// Initialize i18n
i18n
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    debug: process.env.NODE_ENV === "development", // Enable debug mode in development
    fallbackLng: "en", // Fallback to English if the user's language is not available
    lng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    resources: {
      en: { translation: en },
      si: { translation: si },
      ta: { translation: ta },
    },
  });

export default i18n;