import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cStyles from './Header.module.scss';
import { cn } from '../../utils/main';
import { IElementConfig, IToggleItem } from '../../interfacesAndEnums/interfaces';
import ToggleGroup from '../toggle/ToggleGroup';
import { ELang, ELangValue, ETheme } from '../../interfacesAndEnums/enums';
import Logo from '../logo/Logo';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../store';
import Anim from '../anim/Anim';
import { EAnimaton } from '../../interfacesAndEnums/enums';

export default function Header(props: IElementConfig) {
  const { i18n } = useTranslation();
  const language = useSelector((state: { language: { value: string } }) => state.language.value);
  // const theme = useSelector((state: { theme: { name: ETheme } }) => state.theme.name);
  const dispatch = useDispatch();
  const changeLanguage = (item: IToggleItem) => dispatch(setLanguage(item.value));
  const { t } = useTranslation();

  const langToggleItems: IToggleItem[] = [
    {
      title: ELang.EN,
      value: ELangValue.EN,
    },
    {
      title: ELang.UA,
      value: ELangValue.UA,
    },
  ];

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  return (
    <>
      {props.isShow ? (
        <Anim animation={EAnimaton.SLIDE_DOWN}>
          <header id={cStyles.headerBox}>
            <section className={cStyles.mainNavMenu}>
              <nav className={cStyles.navMenu}>
                <div className={cn([cStyles.left, cStyles.navItem])}>
                  <Logo />
                </div>

                {/* <Button
                text={theme}
                onClick={() =>
                  dispatch(setTheme(theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK))
                }
                /> */}

                <ul className={cn([cStyles.navItem, cStyles.right])}>
                  <li>
                    <a href="#">{t('home.menu.howIWork')}</a>
                  </li>
                  <li>
                    <a href="#">{t('home.menu.contacts')}</a>
                  </li>
                  <li>
                    <a href="#">{t('home.menu.portfolio')}</a>
                  </li>
                </ul>

                <div className={cn([cStyles.navItem, cStyles.right, cStyles.navLang])}>
                  <ToggleGroup
                    items={langToggleItems}
                    activeItem={language}
                    styleToggle={cStyles.langToggle}
                    styleItem={cStyles.langToggleItem}
                    styleItemActive={cStyles.active}
                    onClick={changeLanguage}
                  />
                </div>
              </nav>
            </section>
          </header>
        </Anim>
      ) : null}
    </>
  );
}
