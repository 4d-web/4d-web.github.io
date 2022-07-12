mport React from 'react'
import Routes from './data/engine/router.js'
import ReactDOM from 'react-dom'
import {Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {createBrowserHistory} from "history"

const history = createBrowserHistory();

ReactDOM.render(<Router history={history}>
  <div>{renderRoutes(Routes)}</div>
</Router>, document.querySelector('#root'))



































// const BrowserRouter = require("react-router-dom").BrowserRouter
// const Router = require("react-router-dom").Router
// const Link = require("react-router-dom").Link
// const engineRouter = require("./data/engine/router.jsx")

// let app = express();

// const PORT = process.env.PORT || 3000;
// const folder =
//   __dirname + "/catalog/view/theme/" + config.index + "/template/layouts"
//
// async function start() {
//   try {
//     app.listen(PORT, () => {
//       console.log("Server has been started - http://localhost:" + PORT)
//     });
//   } catch {
//     console.log(e);
//   }
// }

// start();


// TODO: "234"

