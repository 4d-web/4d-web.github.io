import React from 'react';
import styles from './Logo.module.scss';
import { cn } from '../../utils/main';
import { ILogo } from '../../interfacesAndEnums/interfaces';

export default function Logo(props: ILogo) {
  return (
    <div className={cn(styles.logo)}>
      <h2 style={props?.styles} className={styles.title}>
        <a href="/">
          <span>4d</span>-web_
        </a>
      </h2>
    </div>
  );
}
