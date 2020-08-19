import React from 'react'

export default function Col(props) {

    return (
        <div className={"col " + props.classes}>{props.children}</div>
    )
}