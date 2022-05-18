import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { FiSend } from 'react-icons/fi';
import { useSelector } from "react-redux";


const EmailModal = (props) => {
    console.log('3');

    const [formData, setFormData] = useState({
        department: 'Select',
        employeeNames: [],
        selectedEmployee: '',
        emailIds: [],
        selectedEmail: ''
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

    // ---- load employee data ----

    const employeeData = useSelector((state) => {
        console.log(state.settings.employeeData);
        try {
            return state.settings.employeeData;
        }
        catch (err) {
            console.log(err)
        }
    })

    let emplist = formData.employeeNames;
    let emailIds = formData.emailIds;

    const handleChange = (event) => {

        // ---- event is from department dropdown ----
        if (event.target.name == 'department') {
            // ---- prepare to display employee list ----
            emplist = [];
            emailIds = [];
            employeeData.forEach(obj => {
                if (event.target.value == obj.departmentName) {
                    emplist.push(obj.employeeName);
                }
            });
        }

        // ---- event is from name dropdown ----
        if (event.target.name == 'selectedEmployee') {
            // ---- prepare to display email list ----
            emailIds = [];
            employeeData.forEach(obj => {
                if (event.target.value == obj.employeeName) {
                    emailIds.push(obj.email);
                }
            })
                ;
        }

        setFormData({ ...formData, 'employeeNames': emplist, 'emailIds': emailIds, [event.target.name]: event.target.value });
        console.log(formData);
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
                            <select name='department' className='dropdown-border' id='dropdown' onChange={(e) => { handleChange(e) }}>
                                <option value=''  >Select</option>
                                {departmentList?.map((obj, key) => {
                                    return (<option key={key} value={obj.name} >{obj.name}</option>)
                                })}
                            </select>
                        }
                    </InputGroup>
                    <InputGroup className="mb-3 mt-4" >
                        <InputGroup.Text >Name : </InputGroup.Text>
                        {
                            <select name='selectedEmployee' className='dropdown-border' id='dropdown' onChange={(e) => { handleChange(e) }}>
                                <option value=''  >Select</option>
                                {formData.employeeNames?.map((val, key) => {
                                    return (<option key={key}>{val}</option>)
                                })}
                            </select>
                        }
                    </InputGroup>
                    <InputGroup className="mb-3 mt-4" >
                        <InputGroup.Text >Email : </InputGroup.Text>
                        {
                            <select name='selectedEmail' className='dropdown-border' id='dropdown' onChange={(e) => { handleChange(e) }}>
                                <option value='' selected="selected" >Select</option>
                                {formData.emailIds?.map((val, index) => {
                                    return (<option key={index}>{val}</option>)
                                })}
                            </select>
                        }
                    </InputGroup>
                </Modal.Header>

                <Modal.Body>
                    <InputGroup className="mb-3 mt-4" >
                        <InputGroup.Text >Subject : </InputGroup.Text>
                        <FormControl
                            placeholder="subject"
                            name='subject'
                            // value={formData.remark}
                            // onChange={(value) => handleChange(value)}
                        />
                    </InputGroup>
                    <textarea >
                        
                    </textarea>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => setShowEmailModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EmailModal;