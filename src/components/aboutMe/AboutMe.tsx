import React from 'react';
import cStyles from './AboutMe.module.scss';
import styles from '../../assets/css/elements.module.scss';
import { cn } from '../../utils/main';
import { IElementConfig } from '../../interfacesAndEnums/interfaces';
import { useTranslation } from 'react-i18next';
import Button from '../button/Button';
import Anim from '../anim/Anim';
import { EAnimaton } from '../../interfacesAndEnums/enums';
import Skelet from '../skeleton/Skelet';
import Portfolio from '../portfolio/Portfolio';

export default function AboutMe(props: IElementConfig): React.component {
  const { t } = useTranslation();
  const imgUrl = (name: string, type = 'webp') => `/src/assets/images/main/${name}.${type}`;

  return (
    <>
      <div className={styles.contentBox}>
        <div className={cn([cStyles.greetingBox])}>
          <div className={cn([cStyles.greetingText])}>
            <h1 className={cn([styles.veryBig, styles.bold, styles.mthm, styles.lh13])}>
              <Anim animation={EAnimaton.LETTER_DROP} text={t('home.progressiveAndUnique')}></Anim>
              <br />
              <Anim
                animation={EAnimaton.LETTER_DROP}
                clsses={cn([styles.textDarkMain])}
                text={t('home.webProducts')}
              />
            </h1>

            {t('home.developmentWebsite')
              .split('\n')
              .map((line, i) => (
                <Anim key={i} animation={EAnimaton.SLIDE_DOWN}>
                  <p>{line}</p>
                </Anim>
              ))}
            <Anim animation={EAnimaton.SLIDE_DOWN}>
              <Button classes={cn(['minWidtn', styles.mth])} text="Почати співпрацю" />
            </Anim>
          </div>
          <div className={cn([cStyles.greetingImg])}>
            <Skelet src={imgUrl('Rocet')} alt="Rocet" width="250px" height="250px" />
          </div>
        </div>

        <div className={cn(cStyles.contentItem)}>
          <Portfolio classes={cn([cStyles.infoWrapper])} header={t('portfolio.services')}>
            <div className={cn([cStyles.infoItem])}>
              <Skelet src={imgUrl('Notebook')} alt="Notebook" width="250px" height="250px" />
              <p className={cn([cStyles.infoHeader, styles.bold])}>title</p>
              <p className={cn([styles.textDarkSecond])}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, accusamus?
              </p>
            </div>
            <div className={cn([cStyles.infoItem])}>
              <Skelet src={imgUrl('Gear')} alt="Gear" width="250px" height="250px" />
              <p className={cn([cStyles.infoHeader, styles.bold])}>title</p>
              <p className={cn([styles.textDarkSecond])}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, accusamus?
              </p>
            </div>
            <div className={cn([cStyles.infoItem])}>
              <Skelet src={imgUrl('Penzel')} alt="Penzel" width="250px" height="250px" />
              <p className={cn([cStyles.infoHeader, styles.bold])}>title</p>
              <p className={cn([styles.textDarkSecond])}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, accusamus?
              </p>
            </div>
          </Portfolio>
          <Portfolio classes={cn([])} header={t('more.header')}></Portfolio>
        </div>
      </div>
    </>
  );
}
