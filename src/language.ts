import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import ua from './locales/ua/translation.json';
import { ELangValue } from './interfacesAndEnums/enums';
import { createSlice } from '@reduxjs/toolkit';
import { util } from './utils/main';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    supportedLngs: ['en', 'ua'],
    fallbackLng: 'en',
    backend: {
      loadPath: '/src/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomein'],
      caches: ['cookie'],
    },
    resources: {
      en,
      ua,
    },
  });

export default i18next;

const languageFromCookie = util.getCookie('i18next');
const initialLanguage = languageFromCookie || ELangValue.EN;

export const languageSlice = createSlice({
  name: 'language',
  initialState: { value: initialLanguage },
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
      util.setCookie('i18next', action.payload, { 'max-age': 3600, path: '/' });
    },
  },
});
