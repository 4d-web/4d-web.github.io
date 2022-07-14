// import i18next from 'i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import ua from './ui/locales/ua/translation.json';
// import en from './ui/locales/en/translation.json';

// // export default data.then((value) => {
// //   // console.log(i18n.t(key ? key : 'about_me'));
// //   return value;
// // });
//
// export default async (key: string) => {
//   const get = data.then((value) => {
//     console.warn(value(key));
//     return value(key);
//   });
//   return get;
// };

// const runApp = async (lan) => {
//   console.log('TRUE');
//   await i18next.use(LanguageDetector).init({
//     debug: false,
//     supportedLngs: ['ua', 'en'],
//     fallbackLng: lan,
//     detection: {
//       order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomein'],
//       caches: ['cookie'],
//     },
//     resources: {
//       ua,
//       en,
//     },
//   });
// };
// runApp('en');
//
// export default i18next;

// const btnLang = document.getElementsByClassName('button-lang');
// const changeLanguage = (el) => {
//   const lan = el.getAttribute('data-lan');
//   i18next.changeLanguage(lan);
//   i18next.reloadResources();
//   console.log('CLICK', lan);
// };
//
// Array.from(btnLang).forEach(function (el) {
//   el.addEventListener('click', () => changeLanguage(el));
// });
