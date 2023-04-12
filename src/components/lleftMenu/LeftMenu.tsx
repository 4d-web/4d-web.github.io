import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LeftMenu.module.scss';
import elements from './../../css/elements.module.scss';
import { cn } from '../../../utils/main';
import ToggleGroup from '../toggle/ToggleGroup';
import { IToggleItem } from '../../../interfacesAndEnums/interfaces';

interface LeftMenuParams {
  isShow?: boolean;
}

export default function LeftMenu(props: LeftMenuParams) {
  const { i18n } = useTranslation();
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

  const changeLanguage = (item: IToggleItem) => i18n.changeLanguage(item.value);

  return (
    <div id={styles['header-box']}>
      <div className={styles.content}>
        <ToggleGroup
          items={toggleItems}
          styleItem={cn([styles.inputBtn, elements.btn])}
          styleItemActive={styles.active}
          onClick={changeLanguage}
        />
        <div />
      </div>
    </div>
  );
}
