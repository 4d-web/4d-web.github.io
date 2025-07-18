import React from 'react';
import styles from '../../assets/css/elements.module.scss';
import { cn } from '../../utils/main';
import { useTranslation } from 'react-i18next';
import { IListProps } from '../../interfacesAndEnums/interfaces';
import {
  EListType,
  EListStyleOl,
  EListStyleUl,
  EListStyleText,
} from '../../interfacesAndEnums/enums';

export default function List({
  items,
  itemsTitle,
  title,
  type = EListType.TEXT,
  style = EListStyleText.NORMAL,
}: IListProps) {
  const { t } = useTranslation();

  return (
    <div className={cn([styles.contentBoxSection])}>
      {title && <h3 className={cn([styles.semi, styles.accent])}>{title}</h3>}
      <ul className={styles.ulText}>
        {items.map((item, idx) => (
          <li className={styles.liFlex} key={idx}>
            <div className={styles.liFlexTitle}>{itemsTitle[idx]}:</div>
            <div>{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
