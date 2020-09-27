const React = require("react")
const Link = require('react-router-config')

export default function NotFound () {
    return (
        <div>
            <h1>NotFound</h1>
            <Link to="/">Home</Link>
        </div>
    )
}