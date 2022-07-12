import styles from './css/Main.module.scss';
import i18next from './../../../language';
const t = i18next.t;

export default class Menu {
  show: () => void;

  constructor() {
    this.show = () => {
      document.getElementById('content-data').insertAdjacentHTML(
        'afterbegin',
        `
             <div class="${styles.content}">
               <!--<h2>І тут такий вжук, і мова помінялася.</h2>
               <br>
               <br>
               <div>${t('developer_tools')}</div>
               <br>-->
               <button class="button-lang" data-lan='en'>EN</button>
               <button class="button-lang" data-lan='ua'>UA</button>
             <div/>`
      );
    };
    this.show();
  }
}
