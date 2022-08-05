import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LeftMenu.module.scss';
import elements from './../../css/elements.module.scss';

import { cn } from '../../../utils/main';
import ToggleGroup, { item } from '../toggle/ToggleGroup';

interface LeftMenuParams {
  isShow?: boolean;
}

export default function LeftMenu(props: LeftMenuParams) {
  const { t, i18n } = useTranslation();
  // const lan = Object.assign(Array(i18n.store.options.supportedLngs));
  // const supportedLngs = lan[0].slice(lan.length - 1, -1);

  const toggleItems = [
    {
      title: 'UA',
      value: 'ua',
      default: true,
    },
    {
      title: 'EN',
      value: 'en',
    },
  ];

  const changeLanguage = (item: item) => i18n.changeLanguage(item.value);

  return (
    <div id={styles['header-box']}>
      <div className={styles.content}>
        <h2>Вжух і мова змінилась.</h2>
        <div>{t('developer_tools')}</div>

        <ToggleGroup
          items={toggleItems}
          styleBtn={cn([styles.inputBtn, elements.btn])}
          styleBtnActive={styles.active}
          onClick={changeLanguage}
        />
        <div />
      </div>
    </div>
  );
}
