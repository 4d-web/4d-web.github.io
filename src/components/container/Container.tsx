import * as cStyles from './Container.module.scss';
import React from 'react';
import AboutMe from '@/components/aboutMe/AboutMe';

export default function Container(): React.component {
  return (
    <section id={cStyles.container}>
      <AboutMe />
    </section>
  );
}
