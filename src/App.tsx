import React, { useEffect } from 'react';
import './language';
import Context from './Context';
import Header from './components/header/Header';
import Container from './components/main/Container';
import MainBox from './MainBox';
import Footer from './components/footer/Footer';
import Button from './components/button/Button';
import { ISettingsApp } from './interfacesAndEnums/interfaces';

export default function App() {
  const settingsState: ISettingsApp = { isShowHeader: true, theme: 'DARK' };
  const [settings, setSettings] = React.useState({ settingsState });

  useEffect(() => {
    const style = document.createElement('style');

    style.textContent = `
      :root {
        
      }
    `;

    document.head.appendChild(style);
  }, []);

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
          <Container />
          <Footer isShow={!settings?.isShowFooter} />
        </MainBox>
      </Context.Provider>
    </>
  );
}
