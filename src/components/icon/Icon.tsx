import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import React from 'react';
import { useSelector } from 'react-redux';

type IconLib = 'md' | 'fa' | 'bs';
type IconName = string;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  lib?: IconLib | string;
  size?: number;
}

// https://react-icons.github.io/react-icons/icons/bs/

export default function Icon({ name, lib = undefined, size = 24, ...props }: IconProps) {
  lib = lib || useSelector((state: { icons: { lib: string } }) => state.icons.lib);

  const libraries = {
    md: MdIcons,
    fa: FaIcons,
    bs: BsIcons,
  };

  const IconComponent = libraries[lib][name];

  return IconComponent ? <IconComponent size={size} {...props} /> : null;
}
