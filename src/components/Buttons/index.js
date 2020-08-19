import React from 'react'
import "./style.css"
import { usePortfolioContext } from "../../utils/GlobalState"

export function OpenButton({ project, openModal }) {

    return (
        <a onClick={() => openModal(project)} className="waves-effect blue darken-1 btn readmore"><i className="material-icons right">code</i>Read More</a>
    )

}

export function CloseButton({ project, closeModal }) {

    return (

        <a onClick={() => closeModal(project)} className="btn-floating btn-small waves-light red closing"><i className="material-icons">close</i></a>
    )

}

export function GithubButton({ link }) {

    return (
        <a target="_blank" href={link} className="waves-effect purple lighten-2 btn social github modal-btn">
            <i className="fa fa-github"></i> See Codebase</a>
    )
}

export function DeployedButton({link}) {
    return (
        <a target="_blank" href={link} className="waves-effect blue darken-1 btn social github modal-btn">
            <i className="material-icons left">build</i> See Deployed Application</a>
    )
}