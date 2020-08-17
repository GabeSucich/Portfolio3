import React from 'react'

export default function Row(props) {

    return (
        <div className={"row " + props.classes}>{props.children}</div>
    )


}