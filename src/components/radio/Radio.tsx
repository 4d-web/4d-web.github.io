import React, { useId } from 'react';
import { useState } from 'react';
import { cn } from '../../utils/main';
import styles from '../../assets/css/elements.module.scss';
import { IRadio } from '../../interfacesAndEnums/interfaces';

export default function ToggleGroup(props: IRadio): React.Component {
  const [active, setActive] = useState(props.activeItem);

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
