import styles from './css/Main.module.scss';
import i18next from './../../../language';
const t = i18next.t;
import crashAviator from './../../../apps/crashAviator/game';

export default class Apps {
  show: () => void;
  // styles = styles;
  constructor() {
    this.show = () => {
      crashAviator();
      // document.getElementById('content-data').insertAdjacentHTML(
      //   'afterbegin',
      //   `
      //   <section id="${this.styles['section_apps']}">
      //       <button>crashAviator</button>
      //   </section>
      //   `
      // );
    };
    this.show();
  }
}
