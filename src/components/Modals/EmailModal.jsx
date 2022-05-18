import React, { useState } from "react";
import { Modal, Button, InputGroup } from "react-bootstrap";
import { FiSend } from 'react-icons/fi';
import { useSelector } from "react-redux";


const EmailModal = (props) => {
    console.log('3');

    const [formData, setFormData] = useState({
        departmentID : '',
        department: 'Select Department',
        name: '',
        email: '',
        phone: ''
    });

    // ---- email modal control ----
    const [showEmailModal, setShowEmailModal] = useState(false);

    // ---- load department list ----

    const departmentList = useSelector((state) => {
        console.log(state.settings.departmentList);
        try {
            return state.settings.departmentList;
        }
        catch (err) {
            // return [];
            console.log(err);
        }
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    return (
        <>
            <FiSend onClick={() => setShowEmailModal(true)} />
            <Modal
                show={showEmailModal}
                onHide={() => setShowEmailModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                <Modal.Header closeButton>

                    <InputGroup className="mb-3 mt-4" >
                        <InputGroup.Text >Dept : </InputGroup.Text>
                        {
                            <select name='departmentID' className='dropdown-border' id='dropdown' onChange={(val) => { handleChange(val) }}>
                                <option value='' selected="selected" >Select</option>
                                {departmentList?.map((obj) => {
                                    return (<option >{obj.name}</option>)
                                })}
                            </select>
                        }
                    </InputGroup>
                    <InputGroup className="mb-3 mt-4" >
                        <InputGroup.Text >Name : </InputGroup.Text>
                        {
                            <select name='department' className='dropdown-border' id='dropdown' onChange={(val) => { handleChange(val) }}>
                                <option value='' selected="selected" >Select</option>
                                {departmentList?.map((obj) => {
                                    return (<option >{obj.name}</option>)
                                })}
                            </select>
                        }
                    </InputGroup>
                    <InputGroup className="mb-3 mt-4" >
                        <InputGroup.Text >Email : </InputGroup.Text>
                        {
                            <select name='department' className='dropdown-border' id='dropdown' onChange={(val) => { handleChange(val) }}>
                                <option value='' selected="selected" >Select</option>
                                {departmentList?.map((obj, index) => {
                                    return (<option >{obj.name}</option>)
                                })}
                            </select>
                        }
                    </InputGroup>
                </Modal.Header>

                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => setShowEmailModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmailModal;