import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../../css/elements.module.scss';
import { cn } from '../../../utils/main';
interface FooterParams {
  isShow?: boolean;
}

export default function Footer(props: FooterParams) {
  const { t } = useTranslation();

  return (
    <>
      {props.isShow ? (
        <footer className={styles.content}>
          <section>
            <div className="content">Footer</div>
          </section>
        </footer>
      ) : null}
    </>
  );
}
