import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import {insertFrom} from '../../actions/posts/postsAction'
import TopNavBar from '../navBar/TopNavBar';

const Forms = () => {

    const [formData, setFormData] = useState({
        nature : '',
        recievedFrom : '',
        subject : '',
        deliverTo : '',
        remark : ''
    });

    const inward = true;

    const {nature, recievedFrom, subject, deliverTo, remark } = formData;

    const handleChange = (change) => {
        setFormData({...formData, [change.target.name]:change.target.value });
        console.log(formData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        insertFrom({inward, nature, recievedFrom, subject, deliverTo, remark});
    }

    return (
        <div>
            <TopNavBar/>
            <Form onSubmit={(s)=>onSubmit(s)}>
                <Form.Label >Nature Of Mail</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='nature'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value)=> handleChange(value)}
                />

                <Form.Label >Received From</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='recievedFrom'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value)=> handleChange(value)}
                />

                <Form.Label >Subject</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='subject'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value) => handleChange(value)}
                />

                <Form.Label >Deliver To</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='deliverTo'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value)=> handleChange(value)}
                />

                <Form.Label >Remarks</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='remark'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value)=> handleChange(value)}
                />
                
                <button type="submit" className="btn btn-primary" >Submit</button>
            </Form>
        </div>
    )
}

export default Forms;