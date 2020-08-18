import React from 'react'
import {usePortfolioContext} from "../../utils/GlobalState"

export function OpenButton({project, openModal}) {

    return (
        <button onClick={() => openModal(project)}>Read More</button>
    )

}

export function CloseButton({project, closeModal}) {

    return (
        <button onClick={() => closeModal(project)}>Close</button>
    )

}