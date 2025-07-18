import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { cn } from '../../utils/main';
import { EAnimaton } from '../../interfacesAndEnums/enums';
import Anim from '../anim/Anim';
import { ISkelet } from '../../interfacesAndEnums/interfaces';

export default function Skelet(props: ISkelet): React.Component {
  const width = props?.width || '20px';
  const height = props?.height || '20px';
  const isLoading = props?.isLoading ?? true;
  const animation = props?.animation || EAnimaton.FADE_IN;
  const src = props?.src || null;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn([src ? 'skeletImg' : 'skeletElement'])}>
      {props?.src ? (
        <>
          <Anim animation={animation}>
            <img
              src={props.src}
              alt={props.alt}
              onLoad={() => setIsLoaded(true)}
              onError={() => console.error('Image failed to load: ' + props.src)}
              style={{
                display: isLoaded ? 'block' : 'none',
              }}
            />
            {!isLoaded ? <Skeleton width={width} height={height} /> : ''}
          </Anim>
        </>
      ) : isLoading ? (
        <Skeleton />
      ) : props?.children ? (
        <Anim animation={animation}>{props.children}</Anim>
      ) : null}
    </div>
  );
}
