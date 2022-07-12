import styles from './css/Main.module.scss';
import i18next from './../../../language';
const t = i18next.t;

export class Info {
  show: () => void;

  constructor() {
    this.show = () => {
      document.getElementById('header-data').innerHTML = '';
      document.getElementById('header-data').insertAdjacentHTML(
        'afterbegin',
        `
        <header>
            <section class="section-menu main_nav_menu">
                <div class="content">
                    <nav class="nav-menu">
                        <ul class="nav-item left">
                            <li>    
                                <h2 class="title"><a href="/"><span>4d</span>-web_ </a></h2>
                            </li>
                        </ul>
                       <!--<ul class="nav-item right">
                            <li><a href="#">${t('about_me')}</a></li>
                            <li><a href="#">${t('apps')}</a></li>
                            <li><a href="#">${t('developer_tools')}</a></li>
                            <li><a href="#">${t('css_presets')}</a></li>
                        </ul>-->
                    </nav>
                </div>
            </section>
        </header>`
      );
    };
    this.show();
  }
}

// info = () => {
//
//   return content;
// };

export default Info;
