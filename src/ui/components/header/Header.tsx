import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { cn } from '../../../utils/main';
import { IElementConfig } from '../../../interfacesAndEnums/interfaces';

export default function Header(props: IElementConfig) {
  const { t } = useTranslation();

  return (
    <>
      {props.isShow ? (
        <header id={styles['header-box']}>
          <section className={styles.main_nav_menu}>
            <div className={styles.content}>
              <nav className={styles['nav-menu']}>
                <ul className={cn([styles.left, styles['nav-item']])}>
                  <li>
                    <h2 className={styles.title}>
                      <a href="/">
                        <span>4d</span>-web_{' '}
                      </a>
                    </h2>
                  </li>
                </ul>
                <ul className={cn([styles['nav-item'], styles.right])}>
                  <li>
                    <a href="#">{t('about_me')}</a>
                  </li>
                  <li>
                    <a href="#"> {t('apps')}</a>
                  </li>
                  <li>
                    <a href="#">{t('developer_tools')}</a>
                  </li>
                  <li>
                    <a href="#">{t('css_presets')}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
        </header>
      ) : null}
    </>
  );
}
