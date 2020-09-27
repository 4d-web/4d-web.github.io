// common React from 'react'
import App from './../../App'
import Home from '../../catalog/view/theme/default/template/common/home'
import Info from '../../catalog/view/theme/default/template/info/info'
import DeveloperTools from '../../catalog/view/theme/default/template/info/home'
import NotFound from '../../catalog/view/theme/default/template/errors/404'

export default [
    {
        component: App,
        routers: [
            {
                component: Home,
                path: "/",
                exact: true
            },
            {
                component: Info,
                path: "/info"
            },
            {
                component: DeveloperTools,
                path: "/developer-tools"
            },
            {
                component: NotFound
            }
        ]
    }
]

// export const renderRoutes = () => (
//     <Router history={browserHistory}>
//         <Route exact path="/" component={App} />
//         <Route path="/login" component={LoginForm} />
//     </Router>
// );














// export default class List extends React.Component<IlistProps, IlistState> {
//     constructor(props: IlistProps) {
//         super(props)
//         this.state = {
//             name: ['home', 'app', 'info']
//         }
//     }
//
//     render() {
//         return (<ul className="list-group">
//             {this.state.name.map(name => {
//                 return <li className="group-items">{name}</li>
//             })}
//         </ul>)
//     }
// }
//
// interface IlistProps {
//
// }
//
// interface IlistState {
//
// }