import React from "react"
import "./style.css"

export default function Footer() {

    return (
        <div class="footer grey darken-3">
            <div class="footer-copyright">
                <div class="container center-align">
                    <a target="_blank" href="https://www.linkedin.com/in/gabriel-sucich-6a28a71a8/" className="waves-effect blue darken-1 btn-floating btn-large social linkedin">
                        <i className="fa fa-linkedin"></i> Sign in with linkedin</a>
                        <a target="_blank" href="https://github.com/GabeSucich/" className="waves-effect purple lighten-2 btn-floating btn-large social github">
                            <i className="fa fa-github"></i></a>
                </div>
            </div>
        </div>
    )

} 