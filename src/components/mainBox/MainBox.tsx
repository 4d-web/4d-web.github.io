import React from 'react';
import * as styles from '@/assets/css/elements.module.scss';
import { cn } from '@/utils/main';
import Skelet from '@/components/skeleton/Skelet';

export default function MainBox(props): React.Component {
  return (
    <div className={cn(styles.mainStyle)}>
      <Skelet classes={styles.mainBg} imgName="bg" imgFormat="svg" alt="bg" />
      {props.children}
    </div>
  );
}
