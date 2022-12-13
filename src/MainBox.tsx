import React from 'react';
import styles from './ui/css/elements.module.scss';
import { cn } from './utils/main';

export default function MainBox(props): React.Component {
  return <div className={cn(styles.mainStyle)}>{props.children}</div>;
}
