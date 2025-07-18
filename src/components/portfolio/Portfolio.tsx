import React from 'react';
import { IPortfolio } from '../../interfacesAndEnums/interfaces';
import cStyles from './Portfolio.module.scss';
import styles from './../../assets/css/elements.module.scss';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/main';
import Anim from '../anim/Anim';
import { EAnimaton } from '../../interfacesAndEnums/enums';

export default function Portfolio(props: IPortfolio): React.component {
  const dispatch = useDispatch();
  const showApp = (item: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {};
  const { t } = useTranslation();

  return (
    <section className={cn([cStyles.portfolioWrapper, props.classes])}>
      {props?.header ? (
        <Anim animation={EAnimaton.SLIDE_DOWN}>
          <div className={cn([cStyles.portfolioHeader, styles.veryBig, styles.bold])}>
            {t(props.header)}
          </div>
        </Anim>
      ) : null}

      <Anim animation={EAnimaton.SLIDE_DOWN}>
        <div className={cn([cStyles.portfolioContent])}>
          {props?.children ? props.children : t('portfolio.empty')}
        </div>
      </Anim>
      {/* <div style={{ marginTop: '20px' }} className={styles.btnGroup}>
        {appsConfig.map((item, key) => {
          return (
            <Button
              key={key}
              text={item.name}
              rel={ERel.NOFOLLOW}
              onClick={(item) => showApp(item)}
              title={item.name}
              href={item.href}
              type={EButtonType.SECONDARY}
              target={ETargetLink.SELF}
              modalKey={item.href}
              isDisabled={true}
              isLink={true}
              isAnchor={true}
            />
          );
        })}
      </div> */}
    </section>
  );
}
