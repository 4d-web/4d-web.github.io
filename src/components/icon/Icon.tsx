import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Icon({ name, size = 24, ...props }) {
  const lib = useSelector((state: { isons: { lib: string } }) => state.icons.lib);

  const libraries = {
    md: MdIcons,
    fa: FaIcons,
    bs: BsIcons,
  };

  const IconComponent = libraries[lib][name];

  console.log(`Icon: ${name}, Library: ${lib}, Size: ${size}`, IconComponent);

  return IconComponent ? <IconComponent size={size} {...props} /> : null;
}
