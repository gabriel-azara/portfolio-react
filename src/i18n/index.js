// import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import { createRoot } from 'react-dom/client';


import translationEN from './locales/en/translationEN.json';
import translationPT from './locales/pt/translationPT.json';


const resources = {
  'pt-BR': {
    translation: translationPT
  },
  'en-US': {
    translation: translationEN
  }
}

// Configuração do i18next
// .use(LanguageDetector)
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: navigator.language,
    interpolation: {
      escapeValue: false // não é necessário escapar strings traduzidas
    }
    // fallbackLng: 'en',
    // debug: false,
    // resources: {
    //   en: {
    //     translation: translationEN
    //   },
    //   pt: {
    //     translation: translationPT
    //   }
    // },
    
  });

export default i18n;
