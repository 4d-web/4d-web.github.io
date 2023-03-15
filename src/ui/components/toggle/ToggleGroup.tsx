import React, { useId } from 'react';
import { useState } from 'react';
import { cn } from '../../../utils/main';
import styles from '../../css/elements.module.scss';
import { IToggleItem } from '../../../interfacesAndEnums/interfaces';

export interface IToggleGroup {
  items: IToggleItem[];
  activeItem: string;
  styleItem?: string;
  styleItemActive?: string;
  styleToggle?: string;
  onClick: (...item) => void;
}

export default function ToggleGroup(props: IToggleGroup): React.Component {
  const [active, setActive] = useState(props.activeItem);
  // const [isFirstRender, setIsFirstRender] = useState(true);
  // const [removeDefoult, setremoveDefoult] = props.items[0]?.default;
  // props.items.map((item) => (item.default ? setActive(item.value) : null));

  return (
    <div className={cn([props?.styleToggle || styles.textToggle])}>
      {props.items.map((item, key) => (
        <button
          key={key}
          id={useId()}
          className={cn([
            active === item.value ? props?.styleItemActive || styles.active : undefined,
            styles.toggleItem,
            props?.styleItem,
          ])}
          onClick={() => {
            props.onClick(item);
            setActive(item.value);
          }}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

export class toggleGroup {}
