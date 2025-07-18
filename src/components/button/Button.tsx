import React, { useId } from 'react';
import { cn } from '../../utils/main';
import styles from '../../assets/css/elements.module.scss';
import сStyles from './Button.module.scss';
import { ETargetLink } from '../../interfacesAndEnums/enums';
import Icon from '../Icon/Icon';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store';
import { IButton } from '../../interfacesAndEnums/interfaces';

export default function Button(props: IButton): React.Component {
  const dispatch = useDispatch();
  const icon = props?.icon ? props.icon : undefined;
  const isAnchor = props?.isAnchor ? '/#' : '/';
  const link = props?.isNotLocalPage
    ? props?.href
    : window.location.origin + isAnchor + props?.href;

  const btnClick = (item: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    // :TODO Не зрозуміло навіщо тут така логіка спростити, або покращити

    if ((props.href && props?.target === ETargetLink.SELF) || props?.target !== undefined) {
      window.open(link, ETargetLink.SELF);
    }

    if (props.href && props?.target === ETargetLink.BLANK) window.open(link, ETargetLink.BLANK);

    item.target['href'] = props.href;

    props?.modalKey ? dispatch(openModal(props.modalKey)) : null;

    props?.onClick ? props?.onClick(item) : null;
  };

  return (
    <>
      {props?.isLink ? (
        <a
          title={props?.title}
          styles={props?.styles}
          className={cn([
            props?.type ? props.type : сStyles.LINK,
            props?.isDisabled ? styles.disabled : undefined,
            props?.classes,
          ])}
          href={link}
          rel={props.rel}
          target={props?.target}
          aria-disabled={props.isDisabled}
          onClick={(item: React.MouseEvent<HTMLButtonElement>) => {
            item.preventDefault();
            btnClick(item);
          }}
        >
          {props?.text}
        </a>
      ) : (
        <button
          id={useId()}
          title={props?.title}
          className={cn([
            styles.btn,
            props?.type ? props.type : сStyles.PRIMARY,
            props?.isDisabled ? styles.disabled : undefined,
            props?.classes,
          ])}
          disabled={props.isDisabled}
          onClick={(item: React.MouseEvent<HTMLButtonElement>) => {
            btnClick(item);
          }}
        >
          {icon ? <Icon name={icon} /> : null}
          {props?.text}
        </button>
      )}
    </>
  );
}
