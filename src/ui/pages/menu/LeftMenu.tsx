import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './LeftMenu.module.scss';

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

export default function LeftMenu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lan) => i18n.changeLanguage(lan);

  return (
    <div id={style['header-box']}>
      <div className={style.content}>
        <h2>І тут такий вжук, і мова помінялася.</h2>
        <div>{t('developer_tools')}</div>
        <button className={style['button-lang']} onClick={() => changeLanguage('en')} data-lan="en">
          EN
        </button>
        <button className={style['button-lang']} onClick={() => changeLanguage('ua')} data-lan="ua">
          UA
        </button>
        <div />
      </div>
    </div>
  );
}
