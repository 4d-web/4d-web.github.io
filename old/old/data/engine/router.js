import React from 'react'
import config from '../../config'
import App from './../../App'
import Home from './../../catalog/view/theme/default/template/common/home'
import Info from '../../catalog/view/theme/default/template/info/info'
import NotFound from '../../catalog/view/theme/default/template/errors/NotFound'

export default [
    {
        component: App,
        routers: [
            {
                component: Home,
                path: "/",
                exact: true
            }
            // {
            //     component: Info,
            //     path: "/info"
            // },
            // {
            //     component: NotFound
            // }
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