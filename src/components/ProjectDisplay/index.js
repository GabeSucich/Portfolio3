import React from 'react'
import Col from "../Col"
import "./style.css"
import Row from "../Row"
import { OpenButton } from "../Buttons"


export default function ProjectDisplay({ project, openModal }) {

    return (
        <Col classes="s12 m12 l6 col-padding grey">
            <Row>
                <Col classes="s8 m8 l12 col-margin">
                    <div className="center-align">
                        <div className="center-align">
                            <img src={project.src1} alt="Main Photo" />
                        </div>
                    </div>

                </Col>

                <Col classes="s4 m4 l12 col-margin">
                    <p className="center-align">Project.title</p>
                    <div className="center-align">
                        <OpenButton project={project} openModal={openModal} />
                    </div>
                </Col>
            </Row>
        </Col >
    )


}