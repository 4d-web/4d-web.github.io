import i18next from './../../../language';
import mainStyles from './../../css/mainStyles.module.scss';
import styles from './../../css/mainStyles.module.scss';
import Apps from './apps';
import Header from './header';
import Menu from './leftMenu';
// const t = i18next.t;

export default class main {
  show: (callback?: () => void) => void;
  mainStyles = mainStyles;
  styles = styles;

  constructor() {
    const _this = this;
    this.show = () => {
      document.getElementById('content-data').innerHTML = '' + '<div></div>';

      const btnLang = document.getElementsByClassName('button-lang');
      // info();
      // new Header();
      new Menu();
      new Apps();
      console.log(btnLang);
      // :TODO перевірка, якщо мова уже обрана не робити нічого
      const changeLanguage = (el) => {
        const lan = el.getAttribute('data-lan');
        i18next.changeLanguage(lan);
        i18next.reloadResources();
        console.log('CLICK', lan);
        _this.show();
      };

      Array.from(btnLang).forEach(function (el) {
        el.addEventListener('click', () => changeLanguage(el));
      });
    };

    this.show();
  }
}
