import React, { useRef, useEffect } from 'react'
import projects from "../../projects.json"
import M from "materialize-css"
import { usePortfolioContext } from "../../utils/GlobalState"
import ProjectDisplay from "../../components/ProjectDisplay"
import { CloseButton } from "../../components/Buttons"
import Row from "../../components/Row"

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

    return (
        <div>
            <div id="modal1" className="modal" ref={ModalRef}>
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <CloseButton closeModal={handleModalClose} />
                </div>
            </div>
            <Row>
                {projects.map(project => <ProjectDisplay project={project} openModal={handleModalOpen} closeModal={handleModalClose} key={project.id} />)}
            </Row>
        </div>
    )



}
