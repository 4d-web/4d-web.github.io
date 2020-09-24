const React = require("react")
const {renderRoutes} = require('react-router-config')

function App ({route}) {
    return (
        <div>{renderRoutes(route.routers)}</div>
    )
}

App.defaultProps = {
    route: null
}
export default App