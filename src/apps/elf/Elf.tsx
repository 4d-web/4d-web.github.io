import React from 'react';
import { useTranslation } from 'react-i18next';
import ModalWindow from '@/components/modal/Modal';

export default function Elf() {
  const { t } = useTranslation();

  return (
    <>
      <ModalWindow name="elf" title={t('elf.game.name')}></ModalWindow>
    </>
  );
}
