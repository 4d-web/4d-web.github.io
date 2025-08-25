import React from 'react';
import { useTranslation } from 'react-i18next';
import * as cStyles from './Footer.module.scss';
import * as styles from '@/assets/css/elements.module.scss';
import { cn } from '@/utils/main';
import { IFooter } from '@/interfacesAndEnums/interfaces';
import Anim from '@/components/anim/Anim';
import { EAnimaton, EButtonType } from '@/interfacesAndEnums/enums';
import Logo from '@/components/logo/Logo';
import Button from '@/components/button/Button';
import ModalWindow from '@/components/modal/Modal';
import Apps from '@/components/apps/Apps';

export default function Footer(props: IFooter) {
  const { t } = useTranslation();
  const isShow = props?.isShow ?? true;

  return (
    <>
      {isShow ? (
        <Anim animation={EAnimaton.SLIDE_DOWN}>
          <footer id="footerWrapper" className={cStyles.footerWrapper}>
            <div className={cStyles.footerContent}>
              <p className={cn([styles.veryBig, styles.bold])}>{t('footer.contacts')}</p>
              <div className={cn([cStyles.footerItems])}>
                <div>
                  <h3 className={cn([styles.semiBold, styles.textDarkMain, styles.mth])}>
                    {t('footer.email')}
                  </h3>
                  <h3>
                    <a href="mailto:a4rome@gmail.com" className={cn([])}>
                      A4Rome@gmail.com
                    </a>
                  </h3>
                </div>
                <div className={cn([cStyles.footerRight])}>
                  <Button type={EButtonType.LINK} modalKey="terms" text={t('footer.terms')} />
                  <Logo styles={{ fontSize: '40px' }} />
                </div>
              </div>
            </div>
            <ModalWindow name="terms" title={t('footer.terms')}>
              <p>{t('footer.termsMore')}</p>
            </ModalWindow>
            <Apps />
          </footer>
        </Anim>
      ) : null}
    </>
  );
}
