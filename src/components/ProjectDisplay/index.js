import React from 'react'
import Col from "../Col"
import "./style.css"
import Row from "../Row"
import { OpenButton } from "../Buttons"


export default function ProjectDisplay({ project, openModal }) {

    function getSRC(filename) {

        return require("../../assets/projects/" + filename)
    }

    return (
        <Col classes="s12 m12 l12 col-padding grey">
            <Row classes="">
                <Col classes="s8 m8 l12">
                    <div className="center-align">
                        <div className="center-align">
                            <img className="image" alt="Main Photo" src={getSRC(project.src1)}/>
                        </div>
                    </div>

                </Col>

                <Col classes="s4 m4 l12 col-margin">
                    <h5 className="center-align title">{project.title}</h5>
                    <p className="center-align mini">{project.mini}</p>
                    <div className="center-align">
                        <OpenButton project={project} openModal={openModal} />
                    </div>
                </Col>
            </Row>
        </Col >
    )


}