import ModalWindow from '@/components/modal/Modal';
import config from '@/apps/appsConfig';
import crashAviator from '@/apps/crashAviator/game';
import React, { useEffect } from 'react';
import { EModalAppearance } from '@/interfacesAndEnums/enums';

const games: Record<string, Function> = {
  crashAviator,
};

export default function Apps(): React.component {
  console.log('Apps config:', config);
  //   useEffect(() => {
  //     // Этот эффект сработает после рендера всех элементов
  //     setTimeout(() => {
  //       config.forEach((item) => {
  //         games[item.href]?.();
  //       });
  //     }, 0);
  //   }, [config]);

  return (
    <>
      {config.map(
        (item) =>
          item.isActive && (
            <ModalWindow
              key={item.href}
              appearance={EModalAppearance.FULLSCREEN}
              name={item.href}
              title={item.name}
            >
              <item.tegName id={'content-' + item.href}></item.tegName>
              {/* <div id={'content-' + item.href}></div> */}
            </ModalWindow>
          )
      )}
    </>
  );
}
