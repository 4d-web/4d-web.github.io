import React, { useId } from 'react';
import { cn } from '../../../utils/main';
import styles from './Button.module.scss';
import { EButtonType, ERel, ETargetLink } from '../../../interfacesAndEnums/enums';

interface IButton {
  styles?: CSSStyleSheet;
  onClick?: (item?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  target?: ETargetLink;
  type?: EButtonType;
  rel?: ERel;
  key?: number;
  icon?: string;
  title?: string;
  text?: string;
  href?: string;
  isLink?: boolean;
  isAnchor?: boolean;
  isNotLocalPage?: boolean;
  isDisabled?: boolean;
}

export default function Button(props: IButton): React.Component {
  const style = styles[props.type];
  const isAnchor = props?.isAnchor ? '/#' : '/';
  const link = props?.isNotLocalPage
    ? props?.href
    : window.location.origin + isAnchor + props?.href;

  const btnClick = (item: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    // debugger;
    // :TODO Не зрозуміло навіщо тут така логіка спростити, або покращити
    if ((props.href && props?.target === ETargetLink.SELF) || props?.target !== undefined) {
      item.preventDefault();
      window.open(link, ETargetLink.SELF);
    }
    if (props.href && props?.target === ETargetLink.BLANK) window.open(link, ETargetLink.BLANK);

    item.target['href'] = props.href;
    props?.onClick(item);
  };

  return (
    <>
      {props?.isLink ? (
        <a
          title={props?.title}
          className={cn([style, props?.isDisabled ? styles.disabled : undefined, props?.styles])}
          href={link}
          rel={props.rel}
          target={props?.target}
          aria-disabled={props.isDisabled}
          onClick={(item: React.MouseEvent<HTMLAnchorElement>) => {
            props?.target === ETargetLink.SELF ? item.preventDefault() : null;
            props?.onClick;
          }}
        >
          {props?.text}
        </a>
      ) : (
        <button
          id={useId()}
          title={props?.title}
          className={cn([style, props?.isDisabled ? styles.disabled : undefined, props?.styles])}
          disabled={props.isDisabled}
          onClick={(item: React.MouseEvent<HTMLButtonElement>) => {
            btnClick(item);
          }}
        >
          {props?.text}
        </button>
      )}
    </>
  );
}
