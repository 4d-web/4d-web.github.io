const React = require("react")

export default function NotFound () {
    return (
        <div className="error-page page">
            <div className="error_info">
                <p className="error_code">Error 404</p>
                <h1 className="error_text">page not found</h1>
            </div>
            <p>Go back to the <a href="/">home</a> page.</p>
        </div>
    )
}