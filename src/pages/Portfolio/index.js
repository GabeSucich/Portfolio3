import React, { useRef, useEffect } from 'react'
import "./style.css"
import projects from "../../projects.json"
import M from "materialize-css"
import { usePortfolioContext } from "../../utils/GlobalState"
import ProjectDisplay from "../../components/ProjectDisplay"
import { CloseButton } from "../../components/Buttons"
import Row from "../../components/Row"
import Col from "../../components/Col"
import { GithubButton, DeployedButton } from "../../components/Buttons"

export default function Portfolio() {


    const [state, dispatch] = usePortfolioContext()

    var ModalRef = useRef()
    var modal = useRef()


    const handleModalOpen = (project) => {
        dispatch(project)
        modal.current = M.Modal.init(ModalRef.current, {})
        modal.current.open()
    }

    const handleModalClose = () => {
        modal.current.close()
    }

    function getSRC(filename) {
        return require("../../assets/projects/" + filename)
    }

    return (
        <div>

            <div id="modal1" className="modal black white-text" ref={ModalRef}>
                <CloseButton closeModal={handleModalClose} />

                <div className="modal-content">
                    <Row classes="">
                        <Col classes="s12 l7 m12">
                            {state.currentProject ?
                                <Row classes="">
                                    <Col classes="s6 m6 l12">
                                        <div className="modal-images center-align">

                                            <img className="modal-img" src={getSRC(state.currentProject.src1)}/>

                                        </div>
                                    </Col>
                                    <Col classes="s6 m6 l12">
                                        <div className="modal-images center-align">

                                        <img className="modal-img" src={getSRC(state.currentProject.src2)}/>

                                        </div>
                                    </Col>

                                </Row> : ""}
                        </Col>
                        <Col classes="s12 m12 l5">
                            <div className="center-align">
                                <h4>{state.currentProject ? state.currentProject.title : ""}</h4>
                                <p>{state.currentProject ? state.currentProject.description : ""}</p>
                                <DeployedButton link={state.currentProject ? state.currentProject.Deployed : "/"} />
                                <GithubButton link={state.currentProject ? state.currentProject.Github : "/"} />
                            </div>
                        </Col>

                    </Row>

                    <hr className="white" />


                    <Row classes="">
                        <p>Technologies Utilized: </p>
                    </Row>

                </div>

            </div>

            <Row classes="" className="footer">
                {projects.map(project => <ProjectDisplay project={project} openModal={handleModalOpen} closeModal={handleModalClose} key={project.id} />)}
            </Row>
        </div>
    )



}
