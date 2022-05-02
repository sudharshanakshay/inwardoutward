import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';


const OUTForm = () => {

    return (
        <div>
            
            <Form>
                <Form.Label htmlFor="inputPassword5">Serial Number </Form.Label>
                <Form.Control
                    type="Number"
                    id="Number"
                    aria-describedby="passwordHelpBlock"
                />
                 
            </Form>
            <Form>
                <Form.Label htmlFor="inputPassword5">From Department</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    aria-describedby="passwordHelpBlock"
                />
                 
            </Form>
            <Form>
                <Form.Label htmlFor="inputPassword5">Addressee Name</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    aria-describedby="passwordHelpBlock"
                />
                 
            </Form>
            <Form>
                <Form.Label htmlFor="inputPassword5">Description</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
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
                <Form.Label htmlFor="inputPassword5">Receipt Number</Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    aria-describedby="passwordHelpBlock"
                />
                 
            </Form>
            <Form>
                <Form.Label htmlFor="inputPassword5"> Remarks</Form.Label>
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

export default OUTForm;