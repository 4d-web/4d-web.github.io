import React from 'react';

export default function MainBox(props): React.Component {
  return <div className="mainBox mainStyle">{props.children}</div>;
}
