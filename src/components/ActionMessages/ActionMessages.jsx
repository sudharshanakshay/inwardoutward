import { Modal, Button } from "react-bootstrap"
import { useState } from "react";
import TopNavBar from "../navBar/TopNavBar";
const ActionMessage = ({ confirmDelete = false }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <div>
                <TopNavBar/>
                <Button variant="primary" onClick={handleShow}>
                    trying modal
                </Button>
                <Modal show={show} onHide={handleClose}>

                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Are you sure ???</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>

        </>


    );

}

export default ActionMessage;