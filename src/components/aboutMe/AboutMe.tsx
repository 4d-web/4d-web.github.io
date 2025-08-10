import React from 'react';
import cStyles from './AboutMe.module.scss';
import styles from '../../assets/css/elements.module.scss';
import { cn, util } from '../../utils/main';
import { IElementConfig } from '../../interfacesAndEnums/interfaces';
import { useTranslation } from 'react-i18next';
import Button from '../button/Button';
import Anim from '../anim/Anim';
import { EAnimaton, EButtonType, ETargetLink } from '../../interfacesAndEnums/enums';
import Skelet from '../skeleton/Skelet';
import Portfolio from '../portfolio/Portfolio';
import { useDevice } from '../../utils/hook';

export default function AboutMe(props: IElementConfig): React.component {
  const { t } = useTranslation();
  const { isMobile } = useDevice();

  return (
    <>
      <div className={styles.contentBox}>
        <div className={cn([cStyles.greetingBox])}>
          <div className={cn([cStyles.greetingText])}>
            <Anim animation={EAnimaton.SLIDE_DOWN}>
              <h1 className={cn([styles.veryBig, styles.bold, styles.mthm, styles.lh13])}>
                {t('home.progressiveAndUnique')}
                <br />
                <span className={cn([styles.textDarkMain])}>{t('home.webProducts')}</span>
              </h1>
            </Anim>

            {t('home.developmentWebsite')
              .split('\n')
              .map((line, i) => (
                <Anim key={i} animation={EAnimaton.SLIDE_DOWN}>
                  <p>{line}</p>
                </Anim>
              ))}
            <Anim animation={EAnimaton.SLIDE_DOWN}>
              {/* <Button classes={cn(['minWidtn', styles.mth])} text={t('home.startButton')} /> */}
              <Button
                classes={cn(['minWidtn', styles.mth])}
                href="#footerWrapper"
                text={t('home.startButton')}
              />
            </Anim>
          </div>
          <div className={cn([cStyles.greetingImg])}>
            <Skelet imgName={'Rocet'} alt="Rocet" width="250px" height="250px" />
          </div>
        </div>
        <div className={cn(cStyles.contentItem)}>
          <Portfolio
            id="infoWrapper"
            classes={cn([cStyles.infoWrapper])}
            header={t('portfolio.services')}
          >
            <div className={cn([cStyles.infoItem])}>
              <Skelet imgName={'Notebook'} alt="Notebook" width="200px" height="200px" />
              <p className={cn([cStyles.infoHeader, styles.bold])}>{t('services.development')}</p>
              <p className={cn([styles.textDarkSecond])}>{t('services.developmentMore')}</p>
            </div>
            <div className={cn([cStyles.infoItem])}>
              <Skelet imgName={'Gear'} alt="Gear" width="200px" height="200px" />
              <p className={cn([cStyles.infoHeader, styles.bold])}>{t('services.optimization')}</p>
              <p className={cn([styles.textDarkSecond])}>{t('services.optimizationMore')}</p>
            </div>
            <div className={cn([cStyles.infoItem])}>
              <Skelet imgName={'Penzel'} alt="Penzel" width="200px" height="200px" />
              <p className={cn([cStyles.infoHeader, styles.bold])}>{t('services.design')}</p>
              <p className={cn([styles.textDarkSecond])}>{t('services.developmentMore')}</p>
            </div>
          </Portfolio>
          <Portfolio
            id="workWrapper"
            classes={cn([cStyles.workWrapper])}
            header={t('work.howIWork')}
          >
            <div className={cn([cStyles.workItem])}>
              <div className={cn([cStyles.workDot])}>
                <Skelet imgName={'dot'} imgFormat="svg" alt="Resume" width="54px" height="108px" />
              </div>
              <div className={cn([cStyles.workText])}>
                <p className={cn([styles.bold, cStyles.workTitle])}>
                  1. {t('work.dataCollection')}
                </p>
                <p className={cn([cStyles.workMore])}>{t('work.dataCollectionMore')}</p>
              </div>
            </div>
            <div className={cn([cStyles.workItem])}>
              <div className={cn([cStyles.workDot])}>
                <Skelet imgName={'dot'} imgFormat="svg" alt="Resume" width="54px" height="108px" />
              </div>
              <div className={cn([cStyles.workText])}>
                <p className={cn([styles.bold, cStyles.workTitle])}>2. {t('work.offer')}</p>
                <p className={cn([cStyles.workMore])}>{t('work.offerMore')}</p>
              </div>
            </div>
            <div className={cn([cStyles.workItem])}>
              <div className={cn([cStyles.workDot])}>
                <Skelet imgName={'dot'} imgFormat="svg" alt="Resume" width="54px" height="108px" />
              </div>
              <div className={cn([cStyles.workText])}>
                <p className={cn([styles.bold, cStyles.workTitle])}>
                  3. {t('work.technicalSpecification')}
                </p>
                <p className={cn([cStyles.workMore])}>{t('work.technicalSpecificationMore')}</p>
              </div>
            </div>
            <div className={cn([cStyles.workItem])}>
              <div className={cn([cStyles.workDot])}>
                <Skelet imgName={'dot'} imgFormat="svg" alt="Resume" width="54px" height="108px" />
              </div>
              <div className={cn([cStyles.workText])}>
                <p className={cn([styles.bold, cStyles.workTitle])}>4. {t('work.development')}</p>
                <p className={cn([cStyles.workMore])}>{t('work.developmentMore')}</p>
              </div>
            </div>
            <div className={cn([cStyles.workItem])}>
              <div className={cn([cStyles.workDot])}>
                <Skelet imgName={'dot'} imgFormat="svg" alt="Resume" width="54px" height="108px" />
              </div>
              <div className={cn([cStyles.workText])}>
                <p className={cn([styles.bold, cStyles.workTitle])}>5. {t('work.testing')}</p>
                <p className={cn([cStyles.workMore])}>{t('work.testingMore')}</p>
              </div>
            </div>
            <div className={cn([cStyles.workItem])}>
              <div className={cn([cStyles.workDot])}>
                <Skelet imgName={'dot'} imgFormat="svg" alt="Resume" width="54px" height="108px" />
              </div>
              <div className={cn([cStyles.workText])}>
                <p className={cn([styles.bold, cStyles.workTitle])}>6. {t('work.start')}</p>
                <p className={cn([cStyles.workMore])}>{t('work.startMore')}</p>
              </div>
            </div>
          </Portfolio>
          <Portfolio
            id="siteWrapper"
            classes={cn([cStyles.portWrapper])}
            header={t('portfolio.sites')}
            subHeader={t('portfolio.empty')}
          >
            <div></div>
          </Portfolio>
          <Portfolio
            id="appsWrapper"
            classes={cn([cStyles.portWrapper])}
            header={t('portfolio.apps')}
            subHeader={t('portfolio.empty')}
          >
            <div className={cn([cStyles.portItem])}>
              <Button
                isLink={true}
                href="https://f0rti.github.io/mash/"
                type={EButtonType.LINK}
                target={ETargetLink.BLANK}
              >
                <div className={cn([cStyles.portHeader])}>{t('portfolio.apps.mash')}</div>
                <Skelet imgName={'resume-game-mash'} alt="mash" width="250px" height="150px" />
              </Button>
            </div>
            {!isMobile ? (
              <>
                <div className={cn([cStyles.portItem])}></div>
                <div className={cn([cStyles.portItem])}></div>
              </>
            ) : null}
          </Portfolio>
          <Portfolio
            id="designWrapper"
            classes={cn([cStyles.portWrapper])}
            header={t('portfolio.design')}
            subHeader={t('portfolio.empty')}
          >
            <div className={cn([cStyles.portItem])}>
              <Button
                isLink={true}
                href="https://www.figma.com/design/l4iGsyNrthwzG786iwb4fz/Template-food?node-id=0-1&t=MPxMMnExC5HsA00R-1"
                type={EButtonType.LINK}
                target={ETargetLink.BLANK}
              >
                <div className={cn([cStyles.portHeader])}>{t('portfolio.design.food')}</div>
                <Skelet imgName={'resume-design-food'} alt="food" width="250px" height="150px" />
              </Button>
            </div>
            {!isMobile ? (
              <>
                <div className={cn([cStyles.portItem])}></div>
                <div className={cn([cStyles.portItem])}></div>
              </>
            ) : null}
          </Portfolio>
          <Portfolio classes={cn([cStyles.resumeWrapper])} header={t('resume.header')}>
            <a
              className={cn([cStyles.resumeLink])}
              href="https://docs.google.com/document/d/13X65XvANXfjfBnxCv9UMfaAas48awUtosxXA6cjjPbI/edit?usp=sharing"
              target="_blank"
            >
              <div className={cn([cStyles.resumeItem])}>
                {isMobile ? (
                  <Skelet
                    imgName={'resume-mobile'}
                    imgFormat="svg"
                    alt="Resume"
                    width="250px"
                    height="150px"
                  />
                ) : (
                  <Skelet
                    imgName={'resume'}
                    imgFormat="svg"
                    alt="Resume"
                    width="250px"
                    height="150px"
                  />
                )}
                <p className={cn([cStyles.resumeDownload])}>{t('resume.download')}</p>
              </div>
            </a>
          </Portfolio>
        </div>
      </div>
    </>
  );
}
