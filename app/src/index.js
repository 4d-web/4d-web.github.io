import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

import './catalog/view/theme/default/stylesheet/style.scss';
import './catalog/view/theme/default/stylesheet/mega-box.css';
import './catalog/view/theme/default/stylesheet/style-pages.scss';
// common App from './App';
import * as serviceWorker from './serviceWorker';
import Routes from './data/engine/router.jsx'
import {createBrowserHistory} from "history"

import Header from './catalog/view/theme/default/template/common/header'
import Footer from './catalog/view/theme/default/template/common/footer'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Header></Header>
        <div className="main mainStyle">{renderRoutes(Routes)}</div>
        <Footer></Footer>
    </Router>
    , document.querySelector('#root'))

serviceWorker.unregister();
