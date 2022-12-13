import React from 'react';
import cStyles from './AboutMe.module.scss';
import styles from './../../css/elements.module.scss';
import { cn } from '../../../utils/main';
import { IElementConfig } from '../../../interfacesAndEnums/interfaces';

export default function AboutMe(props: IElementConfig): React.component {
  return (
    <>
      <div className={styles.contentBox}>
        <div>
          <p className={cn([styles.veryBig, styles.mth])}>
            <span className={styles.accent}>Привіт!</span> Мене звати Богдан <br /> я web-developer.
          </p>
          <h3 className={cn([styles.semi, styles.mth])}>Поглянь що я вмію!</h3>
          {/* <a className={cn([styles.semi, styles.mtp, styles.accent])}>Завантаж моє повне резюме!</a>*/}
        </div>
        <div className={cn([styles.contentBoxSection])}>
          <h3 className={cn([styles.semi, styles.accent])}>Web-development / designe</h3>
          <ul className={styles.ulText}>
            <li className={styles.liFlex}>
              <div className={styles.liFlexTitle}>Junior:</div>
              <div>SEO, Hалаштування хостинга</div>
            </li>
            <li className={styles.liFlex}>
              <div className={styles.liFlexTitle}>Middle:</div>
              <div>
                Розробка сайтів, Пошук та виправлення помилок (HTML, JS, TS, REACT), Оптимізація
                коду, Розробка слотових ігор, Дизайн сайтів
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
