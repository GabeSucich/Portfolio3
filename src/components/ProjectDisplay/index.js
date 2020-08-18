import React from 'react'
import Col from "../Col"
import Row from "../Row"
import {OpenButton} from "../Buttons"


export default function ProjectDisplay({project, openModal}) {

    return (
        <Col classes="s12 m6 l6">
            <div className="center-align">
                <img src={project.src1} alt="Main Photo"/>
            </div>
            <p className="center-align">Project.title</p>
            <OpenButton project={project} openModal={openModal}/>
        </Col>
    )


}