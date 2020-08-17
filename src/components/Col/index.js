import React from 'react'

export default function Col(props) {

    return (
        <div class={"col " + props.classes}>{props.children}</div>
    )
}