import React, { useEffect, useRef } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import M from "materialize-css"
import Resume from "../../assets/resume.pdf"

export default function Navbar() {

    const Slideout = useRef()

    useEffect(() => {
        M.Sidenav.init(Slideout.current, {})
    })



    return (

        <div>

            <ul id="slide-out" className="sidenav grey darken-3 white-text" ref={Slideout}>
                <br />
                <hr />
                <li>
                    <a href="#" className="white-text">Email: gabe.sucich@gmail.com</a>
                </li>
                <hr />
                <li>
                    <a href="#" className="white-text">773-746-5141</a>
                </li>
                <hr />
                <br />
                <hr />
                <li>
                    <a class="waves-effect blue darken-1 btn col s12 social linkedin">
                        <i class="fa fa-linkedin white-text"></i> LinkedIn</a>
                </li>
                <hr />
                <li>
                    <a class="waves-effect grey darken-1 btn-large social github">
                        <i class="fa fa-github white-text"></i> Github</a>
                </li>
                <hr />
                <li>
                    <div className="center-align">
                        <img className="profile-img" src={require("../../assets/profile.png")}/>
                    </div>
                </li>




            </ul>

            <nav>
                <div className="nav-wrapper black">
                    <ul className="padder">
                        <li><a href="sass.html" data-target="slide-out" className="sidenav-trigger show-on-large" >Gabe Sucich</a></li>
                        <li><a href="badges.html" className="portfolio grey darken-3">Components</a></li>
                        <li><a target="_blank" href={Resume}>Resume</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )

}