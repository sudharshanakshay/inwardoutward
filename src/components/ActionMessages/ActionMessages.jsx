import { Modal, Button } from "react-bootstrap";
import {Link, Navigate} from 'react-router-dom';
import { useState } from "react";
import ViewRecord from "../View/View";
const ActionMessage = ({confirmDelete = false , confirmEdit = false}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
   
    if(confirmDelete)
    {
        return (
            <>
    
                <div>
                    <Button onClick={handleShow}>
                        Delete
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Record</Modal.Title>
                        </Modal.Header>
    
                        <Modal.Body>Are you sure you want delete this record ???</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>{' '}
    
            </>
    
    
        );
    
    }

    else if(confirmEdit)
    {
        return (
            <>
    
                <div>
                    <Button  onClick={handleShow}>
                        Edit
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        
                        <Modal.Header closeButton>
                            <Modal.Title>Update</Modal.Title>
                        </Modal.Header>
    
                        <Modal.Body>Do you want to save changes???</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Update
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>{' '}
    
            </>
    
    
        );

        
    }
}
export default ActionMessage;