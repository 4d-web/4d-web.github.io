import React from 'react';
import './language';
import Header from './ui/components/header/Header';
import LeftMenu from './ui/components/menu/LeftMenu';
import Container from './ui/components/main/Container';
import MainBox from './MainBox';
import Footer from './ui/components/footer/Footer';

interface MainBoxParams {
  hideHeader: true;
}

class App extends React.Component {
  private state: { isShowHeader: boolean };
  // private handleClick: any;

  constructor(props: MainBoxParams) {
    super(props);
    // Не вызывайте здесь this.setState()!
    this.state = { isShowHeader: true };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <MainBox>
        <Header isShow={false} />
        <Container isShow={true} />
        <Footer isShow={true} />
      </MainBox>
    );
  }
}

export default App;
