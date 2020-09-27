import React from "react";

export default function Header () {
    return (
        <div>
            <header>
                <section className="section-menu main_nav_menu">
                    <div className="content">
                        <nav className="nav-menu">
                            <ul className="nav-item left">
                                <li>
                                    <h2 className="title"><a href="/"><span>4d</span>-web_ </a></h2>
                                </li>
                            </ul>
                            <ul className="nav-item right">
                                <li><a href="/info">About me</a></li>
                                <li><a href="/info">Apps</a></li>
                                <li><a href="catalog/developer-tools">Developer Tools</a></li>
                                <li><a href="/info">Css presets</a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </header>
        </div>
    )
}