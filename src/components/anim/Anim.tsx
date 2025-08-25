import React from 'react';
import { motion } from 'framer-motion';
import { EAnimaton } from '@/interfacesAndEnums/enums';
import { IAnim } from '@/interfacesAndEnums/interfaces';
import * as cStyles from './Anim.module.scss';
import { cn } from '@/utils/main';

const variants = {
  [EAnimaton.FADE_IN]: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1, ease: 'easeOut' },
  },
  [EAnimaton.SLIDE_DOWN]: {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Anim(props: IAnim): React.Component {
  const selected = variants[props.animation];

  if (props.animation === EAnimaton.LETTER_DROP && props.text) {
    return (
      <>
        {props.text.split('').map((char, i) => (
          <motion.span
            className={props?.clsses}
            key={i}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </>
    );
  }

  return (
    <div className={cn([cStyles.animWrapper])}>
      <motion.div
        className={props?.clsses}
        initial={selected.initial}
        animate={selected.animate}
        exit={selected.exit}
        transition={selected.transition}
      >
        {props.children ? props.children : null}
      </motion.div>
    </div>
  );
}
