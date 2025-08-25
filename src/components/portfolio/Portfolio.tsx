import React from 'react';
import { IPortfolio } from '@/interfacesAndEnums/interfaces';
import * as cStyles from './Portfolio.module.scss';
import * as styles from '@/assets/css/elements.module.scss';
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/main';
import Anim from '@/components/anim/Anim';
import { EAnimaton } from '@/interfacesAndEnums/enums';

export default function Portfolio(props: IPortfolio): React.component {
  const { t } = useTranslation();

  return (
    <section id={props?.id} className={cn([cStyles.portfolioWrapper, props.classes])}>
      <div>
        {props?.header ? (
          <Anim animation={EAnimaton.SLIDE_DOWN}>
            <div className={cn([cStyles.portfolioHeader, styles.veryBig, styles.bold])}>
              {t(props.header)}
            </div>
          </Anim>
        ) : null}
        {props?.subHeader ? (
          <Anim animation={EAnimaton.SLIDE_DOWN}>
            <div className={cn([cStyles.portfolioSubHeader])}>{t(props.subHeader)}</div>
          </Anim>
        ) : null}
      </div>

      <Anim animation={EAnimaton.SLIDE_DOWN}>
        <div className={cn([cStyles.portfolioContent])}>
          {props?.children ? (
            props.children
          ) : (
            <div className={cn([cStyles.portfolioEmpty])}>{t('portfolio.empty')}</div>
          )}
        </div>
      </Anim>
    </section>
  );
}
