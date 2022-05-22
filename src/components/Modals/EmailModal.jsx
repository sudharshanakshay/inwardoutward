import React, { useState } from "react";
import { Modal, InputGroup, FormControl, Form, Spinner } from "react-bootstrap";
import { RiMailSendFill } from 'react-icons/ri';
import { useSelector } from "react-redux";
import { MdSend } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import {getRow, updateTo} from '../../actions/posts/postsAction'
import GoldenSpinner from "../Loading/GoldenSpinner";

const EmailModal = (props) => {
    // console.log('3');

    const [formData, setFormData] = useState({
        department: 'Select',
        employeeNames: [],
        selectedEmployee: '',
        emailIds: [],
        selectedEmail: '',
        subject: localStorage.getItem('subject'),
        body: localStorage.getItem('body'),
        iconLoading: false,
        emailSendError: false
    });

    let emplist = formData.employeeNames;
    let emailIds = formData.emailIds;

    // ---- email modal control ----
    const [showEmailModal, setShowEmailModal] = useState(false);

    // ---- load department list ----

    const departmentList = useSelector((state) => {
        // console.log(state.settings.departmentList);
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
        // console.log(state.settings.employeeData);
        try {
            return state.settings.employeeData;
        }
        catch (err) {
            console.log(err)
        }
    })


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
        }

        // ---- save subject & body of email to localStorage ----
        if (event.target.name == 'subject' || event.target.name == 'body') {
            localStorage.setItem('subject', event.target.value);
            localStorage.setItem('body', event.target.value);
        }

        setFormData({ ...formData, 'employeeNames': emplist, 'emailIds': emailIds, [event.target.name]: event.target.value });
        console.log(formData);
    }


    // const form = useRef();
    const handleSendEmail = () => {
        setFormData({...formData, ['iconLoading']:true});
        console.log(formData.iconLoading);
        // e.preventDefault();
        const params = {
            to_name: formData.selectedEmployee,
            to_email: formData.selectedEmail,
            message: formData.body,
            subject: formData.subject,
            recieved_from : props.recievedFrom
        }
        setFormData({...formData, ['iconLoading']:true});
        console.log(params);
        // const SERVICE_KEY = process.env.service_key;
        // const PUBLIC_KEY = process.env.public_key;
        // const TEMPLATE_KEY = process.env.template_key;

        // emailjs.sendForm(SERVICE_KEY, TEMPLATE_KEY, form.current, 'F25xGp4o4nMxlO0zd')
        emailjs.send('service_xfdmrwb', 'template_t115k7w', params, 'F25xGp4o4nMxlO0zd')
            .then((result) => {
                console.log(result.text, result.status);
                if(result.text === 'OK'){
                    getRow({ inward:true, id:props.id })
                    .then((row)=>{
                        row[0].isEmailSent = 1;
                        row.push({...row.pop(),inward:true});
                        console.log(row[0]);
                        updateTo(row[0]);
                        // ---- also sets all formData to default value '' if reasign is not done ----
                        setFormData({...formData, ['iconLoading']:false});
                    })
                }
                else  setFormData({...formData, ['iconLoading']:false}); 
            }, (error) => {
                console.log(error.text);
                setFormData({...formData, ['iconLoading']:false, ['emailSendError']:true});
            });

        setShowEmailModal(false);
    }

    const handleIconColor = () => {
        if(formData.emailSendError) return 'red';
        if(props.color) return 'green';
    }

    return (
        <>
        {formData.iconLoading && <GoldenSpinner/>}
        {!formData.iconLoading && <RiMailSendFill onClick={() => setShowEmailModal(true)} color={ formData.emailSendError?'red': props.color?'green':'' }/>}
            
            <Form >
                <Modal
                    show={showEmailModal}
                    onHide={() => setShowEmailModal(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered >
                    <Modal.Header closeButton>

                        <InputGroup className="m-0" >
                            <InputGroup.Text >Dept : </InputGroup.Text>
                            {
                                <select name='department' className='color-border' id='dropdown' onChange={(e) => { handleChange(e) }}>
                                    <option value=''  >Select</option>
                                    {departmentList?.map((obj, key) => {
                                        return (<option key={key} value={obj.name} >{obj.name}</option>)
                                    })}
                                </select>
                            }
                        </InputGroup>
                        <InputGroup className="m-0" >
                            <InputGroup.Text >Name : </InputGroup.Text>
                            {
                                <select name='selectedEmployee' className='color-border' id='dropdown' onChange={(e) => { handleChange(e) }}>
                                    <option value=''  >Select</option>
                                    {formData.employeeNames?.map((val, key) => {
                                        return (<option key={key}>{val}</option>)
                                    })}
                                </select>
                            }
                        </InputGroup>
                        <InputGroup className="m-0" >
                            <InputGroup.Text >@</InputGroup.Text>
                            {
                                <select name='selectedEmail' className='color-border' id='dropdown' onChange={(e) => { handleChange(e) }}>
                                    <option value=''  >Select</option>
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
                                value={formData.subject}
                                onChange={(e) => handleChange(e)}
                            />
                        </InputGroup>
                        <FormControl
                                as='textarea'
                                placeholder="body"
                                name='body'
                                value={formData.body}
                                onChange={(e) => handleChange(e)}
                            />
                        {/* <textarea name="body" value={formData.body} onChange={(e) => handleChange(e)} style={{width:'100%'}} className='color-border' >

                        </textarea> */}
                    </Modal.Body>

                    <Modal.Footer>
                        <MdSend size={'2em'} type='submit' onClick={()=>handleSendEmail()} />
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    );
}

export default EmailModal;