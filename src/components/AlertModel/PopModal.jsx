import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { delete_from } from "../../actions/posts/postsAction";


const PopModal = ({ inward, outward, mode, btnText, modelTitle, message, variant, id }) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleClick = () => {
        if (mode === 'delete') {
            if (inward) delete_from({ inward: inward, rowID: id });
            if (outward) delete_from({ outward: outward, rowID: id });
        }
    };
    return (
        <>
            <div>
                <Button variant="link" className="me-1 p-0" onClick={() => setShow(true)}>{mode.trim().replace(/^\w/, (c) => c.toUpperCase())}</Button>
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
                        <Button variant={variant} onClick={handleClick}>
                            {btnText || mode.trim().replace(/^\w/, (c) => c.toUpperCase())}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>{' '}
        </>
    );
}
export default PopModal;