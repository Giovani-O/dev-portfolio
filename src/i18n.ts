import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../locales/en/common.json';
import ptCommon from '../locales/pt/common.json';

function getInitialLanguage(): string {
  const stored = localStorage.getItem('@dev-portfolio-lang');
  if (stored) return stored;
  const browserLang = navigator.language;
  if (browserLang.startsWith('pt')) return 'pt';
  return 'en';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enCommon },
      pt: { translation: ptCommon },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;