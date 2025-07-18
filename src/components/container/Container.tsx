import cStyles from './Container.module.scss';
import React from 'react';
import AboutMe from '../aboutMe/AboutMe';
import { useTranslation } from 'react-i18next';

export default function Container(): React.component {
  return (
    <section id={cStyles.container}>
      <AboutMe />
    </section>
  );
}
