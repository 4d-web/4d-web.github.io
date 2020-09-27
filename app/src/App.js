import React from 'react';
import logo from './logo.svg';
import config from './config.js';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. {config.name}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

const {renderRoutes} = require('react-router-config')

function App ({route}) {
  return (
      <div>
        {renderRoutes(route.routers)}
      </div>
  )
}

App.defaultProps = {
  route: null
}
export default App