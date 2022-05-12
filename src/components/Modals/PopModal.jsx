import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { delete_from } from "../../actions/posts/postsAction";
import store from "../../store";
import { logOut } from "../../actions/auth/authSlice";


const PopModal = ({id, mode, btnText, modelTitle, message, variant, ctlBtnVariant='link' }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleClick = () => {
        if (mode === 'inward_delete') delete_from({ inward: true, rowID: id });
        if (mode === 'outward_delete') delete_from({ outward: true, rowID: id });
        if (mode === 'logout') store.dispatch(logOut());
    };
    return (
        <>
            <div>
                <Button variant={ctlBtnVariant}  className="me-1 p-1" onClick={() => setShow(true)}>{modelTitle.trim().replace(/^\w/, (c) => c.toUpperCase())}</Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                >

                    <Modal.Header closeButton>
                        <Modal.Title>{modelTitle}</Modal.Title>
                    </Modal.Header>

                    { id && <Modal.Body className="center">{message}</Modal.Body>}

                    <Modal.Footer>
                        { <Modal.Body className="center">{message}</Modal.Body>}
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