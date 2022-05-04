import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { insertFrom } from '../../actions/posts/postsAction'
import TopNavBar from '../navBar/TopNavBar';

const OUTForm = () => {

    const [formData, setFormData] = useState({
        serialNo: '',
        department:'',
        receiptNo: '',
        addresseeName: '',
        nature: '',
        description: '',
        remark: ''
    });

    const outward = true;

    const { serialNo,department, receiptNo, addresseeName, nature, description, remark } = formData;

    const handleChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value });
        console.log(formData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        insertFrom({ outward, serialNo,department, receiptNo, addresseeName, nature, description, remark });
    }

    return (
        <div>
            <TopNavBar />
            <Form onSubmit={(s) => onSubmit(s)}>
                
                <Form.Label >Serial No</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='serialNo'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value) => handleChange(value)}
                />

                <Form.Label >Department</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='department'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value) => handleChange(value)}
                />

                <Form.Label >Addressee </Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='addresseeName'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value) => handleChange(value)}
                />

                <Form.Label >Nature</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='nature'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value) => handleChange(value)}
                />

                <Form.Label >Description</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='description'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value) => handleChange(value)}
                />

                <Form.Label >Receipt No</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='receiptNo'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value) => handleChange(value)}
                />

                <Form.Label >Remarks</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    name='remark'
                    aria-describedby="passwordHelpBlock"
                    onChange={(value) => handleChange(value)}
                />

                <button type="submit" className="btn btn-primary" >Submit</button>
            </Form>
        </div>
    )
}

export default OUTForm;