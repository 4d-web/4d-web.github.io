import React from 'react';
import Button from './../button/Button';
import appsConfig from './../../../apps/appsConfig';
import { IElementConfig } from '../../../interfacesAndEnums/interfaces';
import { EButtonType, ERel } from '../../../interfacesAndEnums/enums';

export default function Portfolio(props: IElementConfig): React.component {
  const showApp = (item: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    alert('SHOW');
    console.log(item.target);
  };

  return (
    <>
      <div>Portfolio</div>
      {appsConfig.map((item, key) => {
        console.log(item.name);
        return (
          <Button
            key={key}
            text={item.name}
            rel={ERel.NOFOLLOW}
            onClick={showApp}
            title={item.name}
            href={item.href}
            type={EButtonType.LINK}
            isDisabled={true}
            isLink={true}
            isAnchor={true}
          />
        );
      })}
    </>
  );
}
