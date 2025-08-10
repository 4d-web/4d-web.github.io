import { React } from 'react';
import {
  EListStyleOl,
  EListStyleUl,
  EListType,
  EListStyleText,
  ETargetLink,
  EButtonType,
  ERel,
  EAnimaton,
  EToggleType,
  EImgFormat,
} from './enums';

export interface IElementConfig {
  isShow?: boolean;
}

export interface ISettingsApp {
  isShowHeader?: boolean;
  isShowFooter?: boolean;
  theme?: 'DARK' | 'LIGHT';
}

export interface IToggleItem {
  value: string;
  title: string;
}

export interface IThemeStyles {
  [key: string]: {
    [variable: string]: string;
  };
}

export interface IListProps {
  items: string[];
  itemsTitle?: string[];
  title?: string;
  type?: EListType;
  style?: EListStyleText | EListStyleOl | EListStyleUl;
}

export interface IModal {
  name: string;
  title?: string;
  children?: React.PropsWithChildren | React.ReactNode;
}

export interface IPortfolio {
  id?: string;
  header?: string;
  subHeader?: string;
  galeryItems?: [];
  classes?: string;
  children?: React.PropsWithChildren | React.ReactNode;
}

export interface IFooter {
  isShow?: boolean;
}

export interface ILogo {
  styles?: React.CSSProperties;
}

export interface IButton {
  styles?: React.CSSProperties;
  classes?: string | string[];
  onClick?: (item?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  target?: ETargetLink;
  type?: EButtonType;
  rel?: ERel;
  key?: number;
  icon?: string;
  title?: string;
  text?: string;
  href?: string;
  modalKey?: string;
  isLink?: boolean;
  isAnchor?: boolean;
  isDisabled?: boolean;
  children?: React.PropsWithChildren | React.ReactNode;
}

export interface IAnim {
  animation: EAnimaton;
  key?: number;
  text?: string;
  clsses?: string;
  children?: React.PropsWithChildren | React.ReactNode;
}

export interface IRadio {
  items: IToggleItem[];
  activeItem: string;
  styleItem?: string;
  styleItemActive?: string;
  styleToggle?: string;
  onClick: (...item) => void;
}

export interface ISkelet {
  isLoading?: boolean;
  animation?: EAnimaton;
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  children?: React.PropsWithChildren | React.ReactNode;
  classes?: string;
  imgName?: string;
  imgFormat?: EImgFormat | string;
}

export interface IToggleGroup {
  items: IToggleItem[];
  activeItem: string;
  styleItem?: string;
  styleItemActive?: string;
  styleToggle?: string;
  toggleType?: EToggleType;
  onClick: (...item) => void;
}
