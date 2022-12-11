import React from 'react';
import './language';
import Context from './Context';
import Header from './ui/components/header/Header';
import Container from './ui/components/main/Container';
import MainBox from './MainBox';
import Footer from './ui/components/footer/Footer';
import Button from './ui/components/button/Button';
import { ISettingsApp } from './interfacesAndEnums/interfaces';

export default function App() {
  const settingsState: ISettingsApp = { isShowHeader: true, theme: 'DARK' };
  const [settings, setSettings] = React.useState({ settingsState });

  const showHideElement = (element: string, value: boolean) => {
    setSettings({ [element]: value });
  };

  return (
    <>
      <Context.Provider value={{ settings, setSettings }}>
        <MainBox>
          {/* <Button*/}
          {/*  onClick={() => showHideElement('isShowHeader', !settings.isShowHeader)}*/}
          {/*  text={!settings.isShowHeader ? 'HIDDEN' : 'SHOW'}*/}
          {/* />*/}
          <Header isShow={!settings?.isShowHeader} />
          <Container isShow={true} />
          <Footer isShow={!settings?.isShowFooter} />
        </MainBox>
      </Context.Provider>
    </>
  );
}
