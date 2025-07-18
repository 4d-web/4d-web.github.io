import React from 'react';
import { useTranslation } from 'react-i18next';
import cStyles from './Footer.module.scss';
import styles from './../../assets/css/elements.module.scss';
import { cn } from '../../utils/main';
import { IFooter } from '../../interfacesAndEnums/interfaces';
import Anim from '../anim/Anim';
import { EAnimaton, EButtonType } from '../../interfacesAndEnums/enums';
import Logo from '../logo/Logo';
import Button from '../button/Button';

export default function Footer(props: IFooter) {
  const { t } = useTranslation();
  const isShow = props?.isShow ?? true;

  return (
    <>
      {isShow ? (
        <Anim animation={EAnimaton.SLIDE_DOWN}>
          <footer className={cStyles.footerWrapper}>
            <div className={cStyles.footerContent}>
              <p className={cn([styles.veryBig, styles.bold])}>{t('footer.contacts')}</p>
              <div className={cn([cStyles.footerItems])}>
                <div>
                  <h3
                    className={cn([
                      cStyles.footerText,
                      styles.semiBold,
                      styles.textDarkMain,
                      styles.mth,
                    ])}
                  >
                    {t('footer.email')}
                  </h3>
                  <h3>
                    <a className={cn([])}>A4Rome@gmail.com</a>
                  </h3>
                </div>
                <div className={cn([cStyles.footerRight])}>
                  <Button type={EButtonType.LINK} href="#" text={t('footer.terms')} />
                  <Logo styles={{ fontSize: '40px' }} />
                </div>
              </div>
            </div>
          </footer>
        </Anim>
      ) : null}
    </>
  );
}
