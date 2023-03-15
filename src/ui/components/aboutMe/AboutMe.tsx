import React from 'react';
import cStyles from './AboutMe.module.scss';
import styles from './../../css/elements.module.scss';
import { cn } from '../../../utils/main';
import { IElementConfig } from '../../../interfacesAndEnums/interfaces';
import { useTranslation } from 'react-i18next';

export default function AboutMe(props: IElementConfig): React.component {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.contentBox}>
        <div>
          <p className={cn([styles.veryBig, styles.mth])}>
            <span className={styles.accent}>{t('hi')}</span>&nbsp;
            {t('my_name')}
            <br /> {t('i')} {t('web_developer')}.
          </p>
          <h3 className={cn([styles.semi, styles.mth])}>{t('look_what_i_can_do')}</h3>
          {/* <a className={cn([styles.semi, styles.mtp, styles.accent])}>Завантаж моє повне резюме!</a>*/}
        </div>
        <div className={cn([styles.contentBoxSection])}>
          <h3 className={cn([styles.semi, styles.accent])}>{t('web_development_design')}</h3>
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
