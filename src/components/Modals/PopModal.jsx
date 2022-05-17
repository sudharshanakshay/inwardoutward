import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import store from "../../store";
import { logOut } from "../../actions/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { DELETE, LOGOUT } from "../../utils/Constants";


const PopModal = ({ren=()=>{}, execFunc, id=false, mode, modalBtnText, ctlBtnText, modelTitle, message, modalBtnVariant, ctlBtnVariant='link' }) => {

    // mode can be 'DELETE' or 'LOGOUT' import from utils/constants.js

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let navigate = useNavigate();

    // ren(true);

    if( mode  === DELETE){
        modalBtnVariant = 'outline-danger';
    }

    if( mode === LOGOUT ){
        modalBtnVariant = 'danger';
    }

    const handleClick = () => {
        setShow(false);
        execFunc();
        ren(true);

        if (mode === 'logout') store.dispatch(logOut());
    };
    return (
        <>
                <Button variant={ctlBtnVariant} className="me-1 p-1"  onClick={() => setShow(true)}>{ ctlBtnText || mode?.trim().replace(/^\w/, (c) => c.toUpperCase())}</Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                >

                    <Modal.Header closeButton>
                        <Modal.Title>{modelTitle || mode}</Modal.Title>
                    </Modal.Header>

                    { id && <Modal.Body className="center">{message}</Modal.Body>}

                    <Modal.Footer>
                        { !id && <Modal.Body className="center">{message}</Modal.Body>}
                        <Button variant={modalBtnVariant} onClick={handleClick}>
                            {modalBtnText || mode.trim().replace(/^\w/, (c) => c.toUpperCase())}
                        </Button>
                    </Modal.Footer>
                </Modal>
        </>
    );
}
export default PopModal;