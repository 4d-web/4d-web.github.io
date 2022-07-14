import React from 'react';
import './language';
import Header from './ui/pages/header/header';
import LeftMenu from './ui/pages/menu/LeftMenu';

class App extends React.Component {
  render() {
    return (
      <div className="mainBox mainStyle">
        <Header />
        <LeftMenu />
        <div>
          <main>
            <div id="content-data"></div>
            <h1>ШОООО</h1>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
