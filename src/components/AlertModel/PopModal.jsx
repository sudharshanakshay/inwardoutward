import { Modal, Button } from "react-bootstrap";
import { Link, Navigate } from 'react-router-dom';
import { useState } from "react";
import ViewRecord from "../View/View";
import { delete_from } from "../../actions/posts/postsAction";


const PopModal = ({ inward, outward, mode, btnText, modelTitle, message, variant, id }) => {
    const [show, setShow] = useState(false);
    console.log(show);
    const handleClose = () => setShow(false);

    const handleClick = () => {
        setShow(false);
        if (mode === 'delete') {
            if (inward) delete_from({ inward: inward, rowID: id });
            if (outward) delete_from({ outward: outward, rowID: id });
        }

        if (mode === 'update'){}


    };

    // if(mode === 'delete')
    {
        return (
            <>
                <div>
                    <Button onClick={() => setShow(true)}>{mode.trim().replace(/^\w/, (c) => c.toUpperCase())}</Button>
                    <Modal
                        show={show}
                        onHide={handleClose}
                    // centered
                    >

                        <Modal.Header closeButton>
                            <Modal.Title>{modelTitle}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>{message}</Modal.Body>
                        <Modal.Footer>
                            <Button variant={variant} props onClick={handleClick}>
                                {btnText || mode.trim().replace(/^\w/, (c) => c.toUpperCase())}
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>{' '}
            </>
        );









        // }
        // if(confirmEdit)
        // {
        //     return (
        //         <>

        //             <div>
        //                 <Button  onClick={handleShow}>
        //                     Edit
        //                 </Button>
        //                 <Modal show={show} onHide={handleClose}>

        //                     <Modal.Header closeButton>
        //                         <Modal.Title>Update</Modal.Title>
        //                     </Modal.Header>

        //                     <Modal.Body>Do you want to save changes???</Modal.Body>
        //                     <Modal.Footer>
        //                         <Button variant="secondary" onClick={handleClose}>
        //                             Close
        //                         </Button>
        //                         <Button variant="primary" onClick={handleClose}>
        //                             Update
        //                         </Button>
        //                     </Modal.Footer>
        //                 </Modal>
        //             </div>{' '}


        // </>


        // );


    }
}
export default PopModal;