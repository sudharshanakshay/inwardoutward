import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';

const Forms = () => {
    return (
        <div>
            <Form>
                <Form.Label htmlFor="inputPassword5">Inward Number</Form.Label>
                <Form.Control
                    type="Number"
                    id="Number"
                    aria-describedby="passwordHelpBlock"
                />
                 
            </Form>
            <Form>
                <Form.Label htmlFor="inputPassword5">Nature Of Mail</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    aria-describedby="passwordHelpBlock"
                />
                 
            </Form>
            <Form>
                <Form.Label htmlFor="inputPassword5">Received From</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    aria-describedby="passwordHelpBlock"
                />
                 
            </Form>
            <Form>
                <Form.Label htmlFor="inputPassword5">Subject</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    aria-describedby="passwordHelpBlock"
                />
                 
            </Form>
            <Form>
                <Form.Label htmlFor="inputPassword5">Delivered To</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    aria-describedby="passwordHelpBlock"
                />
                 
            </Form>
            <Form>
                <Form.Label htmlFor="inputPassword5">Remarks</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    aria-describedby="passwordHelpBlock"
                />
                 <button type="button" class="btn btn-primary">Submit</button>
            </Form>
        </div>
    )
}

export default Forms;