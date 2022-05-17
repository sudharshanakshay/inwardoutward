import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { delete_from } from "../../actions/posts/postsAction";
import store from "../../store";
import { logOut } from "../../actions/auth/authSlice";
import { delDepartment, delEmployee } from "../../actions/settings/settingsAction";
import { useNavigate } from "react-router-dom";
import { DELETE, LOGOUT } from "../../utility/Constants";


const PopModal = ({execFunc, id, mode, modalBtnText, ctlBtnText, modelTitle, message, modalBtnVariant, ctlBtnVariant='link' }) => {

    // mode can be 'DELETE' or 'LOGOUT' import from utils/constants.js

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let navigate = useNavigate();

    if( mode  === DELETE){
        modalBtnVariant = 'outline-danger';
    }

    if( mode === LOGOUT ){
        modalBtnVariant = 'danger';
    }

    const handleClick = () => {
        setShow(false);
        execFunc();

        if (mode === 'outward_delete') { navigate("/outward");}
        if (mode === 'department_delete') delDepartment({ rowID:id });
        if (mode === 'delete_employee') delEmployee({ rowID:id })
        if (mode === 'logout') store.dispatch(logOut());
    };
    return (
        <>
                <Button variant={ctlBtnVariant} className="me-1 p-0" onClick={() => setShow(true)}>{ ctlBtnText || mode?.trim().replace(/^\w/, (c) => c.toUpperCase())}</Button>
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