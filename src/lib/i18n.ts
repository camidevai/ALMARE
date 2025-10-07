import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Common translations
import esCommon from '../i18n/es/common.json';
import enCommon from '../i18n/en/common.json';

// Page translations
import esHome from '../i18n/es/pages/home.json';
import enHome from '../i18n/en/pages/home.json';
import esAbout from '../i18n/es/pages/about.json';
import enAbout from '../i18n/en/pages/about.json';
import esServices from '../i18n/es/pages/services.json';
import enServices from '../i18n/en/pages/services.json';
import esTransparency from '../i18n/es/pages/transparency.json';
import enTransparency from '../i18n/en/pages/transparency.json';
import esDonations from '../i18n/es/pages/donations.json';
import enDonations from '../i18n/en/pages/donations.json';
import esBlog from '../i18n/es/pages/blog.json';
import enBlog from '../i18n/en/pages/blog.json';
import esContact from '../i18n/es/pages/contact.json';
import enContact from '../i18n/en/pages/contact.json';
import esPrivacy from '../i18n/es/pages/privacy.json';
import enPrivacy from '../i18n/en/pages/privacy.json';

const resources = {
  es: {
    common: esCommon,
    home: esHome,
    about: esAbout,
    services: esServices,
    transparency: esTransparency,
    donations: esDonations,
    blog: esBlog,
    contact: esContact,
    privacy: esPrivacy,
  },
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    services: enServices,
    transparency: enTransparency,
    donations: enDonations,
    blog: enBlog,
    contact: enContact,
    privacy: enPrivacy,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    defaultNS: 'common',
    
    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;