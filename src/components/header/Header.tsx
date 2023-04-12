import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';
import { cn } from '../../utils/main';
import { IElementConfig, IToggleItem } from '../../interfacesAndEnums/interfaces';
import ToggleGroup from '../toggle/ToggleGroup';
import { ELang, ELangValue } from '../../interfacesAndEnums/enums';

export default function Header(props: IElementConfig) {
  const { i18n } = useTranslation();
  const toggleItems: IToggleItem[] = [
    {
      title: ELang.EN,
      value: ELangValue.EN,
    },
    {
      title: ELang.UA,
      value: ELangValue.UA,
    },
  ];

  let activeItem: string;

  toggleItems.find(
    (item: IToggleItem) => (activeItem = i18n.language == item.value ? item.value : '')
  );

  const changeLanguage = (item: IToggleItem) => i18n.changeLanguage(item.value);

  return (
    <>
      {props.isShow ? (
        <header id={styles['header-box']}>
          <section className={styles.main_nav_menu}>
            <nav className={styles.navMenu}>
              <div className={cn([styles.left, styles.navItem])}>
                <div className={cn(styles.logo)}>
                  <h2 className={styles.title}>
                    <a href="/">
                      <span>4d</span>-web_{' '}
                    </a>
                  </h2>
                </div>
              </div>
              <div className={cn([styles.navItem, styles.right])}>
                <ToggleGroup
                  items={toggleItems}
                  activeItem={activeItem}
                  styleToggle={styles.langToggle}
                  styleItem={styles.langToggleItem}
                  styleItemActive={styles.active}
                  onClick={changeLanguage}
                />
              </div>
              {/* <ul className={cn([styles.navItem, styles.right])}>*/}
              {/*  <li>*/}
              {/*    <a href="#">{t('about_me')}</a>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <a href="#"> {t('apps')}</a>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <a href="#">{t('developer_tools')}</a>*/}
              {/*  </li>*/}
              {/*  <li>*/}
              {/*    <a href="#">{t('css_presets')}</a>*/}
              {/*  </li>*/}
              {/* </ul>*/}
            </nav>
          </section>
        </header>
      ) : null}
    </>
  );
}
