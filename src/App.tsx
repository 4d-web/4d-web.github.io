import React from 'react';
import Header from './components/header/Header';
import Container from './components/container/Container';
import MainBox from './components/mainBox/MainBox';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
      <MainBox>
        <Header isShow={true} />
        <Container />
        <Footer />
      </MainBox>
    </>
  );
}
