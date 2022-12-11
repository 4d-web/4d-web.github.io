import React from 'react';
import styles from './AboutMe.module.scss';
import cStyles from './../../css/elements.module.scss';
import { cn } from '../../../utils/main';
import { IElementConfig } from '../../../interfacesAndEnums/interfaces';

export default function AboutMe(props: IElementConfig): React.component {
  return (
    <>
      <div>
        <p className={cn([cStyles.veryBig, styles.content])}>
          <span>Привіт!</span> Мене звати Богдан я web-developer.
        </p>
      </div>
    </>
  );
}
