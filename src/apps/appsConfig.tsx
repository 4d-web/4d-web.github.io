import { IAppConfig } from '@/interfacesAndEnums/interfaces';
import { t } from 'i18next';

const config: IAppConfig[] = [
  {
    name: 'Crash Aviator',
    href: 'crashAviator',
    tegName: 'crash-aviator',
    isActive: true,
  },
  {
    name: t('elf.game.name'),
    href: 'elf',
    isActive: false,
  },
];

export default config;
