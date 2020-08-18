import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import M from "materialize-css"

export default function Navbar() {

    const Slideout = useRef()

    useEffect(() => {
        M.Sidenav.init(Slideout.current, {})
    })

    return (

        <div>

            <ul id="slide-out" className="sidenav" ref={Slideout}>
            </ul>

            <nav>
                <div className="nav-wrapper blac">
                    <ul>
                        <li><a href="sass.html" data-target="slide-out" className="sidenav-trigger show-on-large">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}