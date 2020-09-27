import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Routes from './data/engine/router.jsx'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: h ttps://bit.ly/CRA-PWA
// serviceWorker.unregister();
// 43

import {Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {createBrowserHistory} from "history"

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <div>{renderRoutes(Routes)}</div>
    </Router>
    , document.querySelector('#root'))

