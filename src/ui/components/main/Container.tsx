import i18next from './../../../language';
import styles from './../../css/elements.module.scss';
import React, { useContext } from 'react';
import { IElementConfig, ISettingsApp } from '../../../interfacesAndEnums/interfaces';
import Portfolio from '../portfolio/Portfolio';
import AboutMe from '../aboutMe/AboutMe';
import Button from '../button/Button';
import Context from '../../../Context';

export default function Container(props: IElementConfig): React.component {
  const { settings, setSettings } = useContext(Context);
  const newContext: ISettingsApp = {
    isShowHeader: true,
  };

  return (
    <div className={styles.content}>
      <AboutMe />
      {/*
      <Button
        text={'Show header'}
        onClick={() => {
          setSettings(newContext);
        }}
      />
      <Portfolio />
       */}
    </div>
  );
}

// export default class Container {
//   show: (callback?: () => void) => void;
//   mainStyles = mainStyles;
//   styles = styles;
//
//   constructor() {
//     // eslint-disable-next-line @typescript-eslint/no-this-alias
//     const _this = this;
//     this.show = () => {
//       document.getElementById('content-data').innerHTML = '' + '<div></div>';
//
//       const btnLang = document.getElementsByClassName('button-lang');
//       // info();
//       // new Header();
//       new Menu();
//       new Apps();
//       console.log(btnLang);
//       // :TODO перевірка, якщо мова уже обрана не робити нічого
//       const changeLanguage = (el) => {
//         const lan = el.getAttribute('data-lan');
//         i18next.changeLanguage(lan);
//         i18next.reloadResources();
//         console.log('CLICK', lan);
//         _this.show();
//       };
//
//       Array.from(btnLang).forEach(function (el) {
//         el.addEventListener('click', () => changeLanguage(el));
//       });
//     };
//
//     this.show();
//   }
// }