import React, { useId } from 'react';
import { useState } from 'react';
import { cn } from '../../../utils/main';
import styles from '../../css/elements.module.scss';

export interface item {
  value: string;
  title: string;
  default?: boolean;
}

export interface IToggleGroup {
  items: item[];
  styleBtn?: string;
  styleBtnActive?: string;
  onClick: (...item) => void;
}

export default function ToggleGroup(props: IToggleGroup): React.Component {
  const [active, setActive] = useState(props.items[0].value);
  // const [removeDefoult, setremoveDefoult] = props.items[0]?.default;

  return (
    <div>
      {props.items.map((item, key) => (
        <button
          key={key}
          id={useId()}
          className={cn([
            active === item.value ? props?.styleBtnActive || styles.active : undefined,
            styles.btn,
            props?.styleBtn,
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
