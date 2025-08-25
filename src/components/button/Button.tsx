import React from 'react';
import { useId } from 'react';
import { cn } from '@/utils/main';
import * as styles from '@/assets/css/elements.module.scss';
import * as cStyles from './Button.module.scss';
import { ETargetLink } from '@/interfacesAndEnums/enums';
import { useDispatch } from 'react-redux';
import { openModal } from '@/store';
import { IButton } from '@/interfacesAndEnums/interfaces';
import { animate } from 'framer-motion';
import Icon from '@/components/icon/Icon';

export default function Button(props: IButton): React.Component {
  // TODO: Simplify component

  const dispatch = useDispatch();
  const icon = props?.icon ? props.icon : undefined;
  const link = props?.href || undefined;

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offsetTop = element.getBoundingClientRect().top + window.scrollY;

    animate(window.scrollY, offsetTop, {
      duration: 0.8,
      onUpdate: (latest) => window.scrollTo(0, latest),
      ease: [0.25, 0.1, 0.25, 1],
    });
  };

  const btnClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const isModal = props?.modalKey;

    if (link) {
      const isLocalAnchor = props.href.startsWith('#');
      const isTargetSelf = props?.target === ETargetLink.SELF;
      const isTargetBlack = props?.target === ETargetLink.BLANK;

      if (isLocalAnchor) scrollToElement(props.href.replace('#', ''));
      if (isTargetSelf) window.open(link, ETargetLink.SELF);
      if (isTargetBlack) window.open(link, ETargetLink.BLANK);
    }

    if (isModal) dispatch(openModal(props.modalKey));

    if (props?.onClick) props.onClick(e);
  };

  return (
    <>
      {props?.isLink ? (
        <a
          title={props?.title}
          styles={props?.styles}
          className={cn([
            props?.type ? props.type : cStyles.LINK,
            props?.isDisabled ? 'disabled' : undefined,
            props?.classes,
          ])}
          href={link}
          rel={props.rel}
          target={props?.target}
          aria-disabled={props.isDisabled}
          onClick={btnClick}
        >
          {props?.text}
          {props?.children}
        </a>
      ) : (
        <button
          id={useId()}
          title={props?.title}
          className={cn([
            styles.btn,
            props?.type ? props.type : cStyles.PRIMARY,
            props?.isDisabled ? 'disabled' : undefined,
            props?.classes,
          ])}
          disabled={props.isDisabled}
          onClick={btnClick}
        >
          {icon ? <Icon name={icon} /> : null}
          {props?.text}
          {props?.children}
        </button>
      )}
    </>
  );
}
