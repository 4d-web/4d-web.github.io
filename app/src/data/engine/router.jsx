// common React from 'react'
import App from './../../App'
import Page from './pages'
import Home from '../../catalog/view/theme/default/template/common/home'
import Info from '../../catalog/view/theme/default/template/info/info'
import DeveloperTools from '../../catalog/view/theme/default/template/DeveloperTools/index'
import NotFound from '../../catalog/view/theme/default/template/errors/404'

let page = {
    Home: {
        component: Home,
        path: Page.Home.path,
        exact: true
    },
    Info: {
        component: Info,
        path: Page.Info.path
    },
    Tools: {
        component: DeveloperTools,
        path: Page.Tools.path
    },
    NotFound: {
        component: NotFound
    }
}

export default [
    {
        component: App,
        routers: [
            page.Home,
            page.Tools,
            page.Info,
            page.NotFound
        ]
    }
]





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