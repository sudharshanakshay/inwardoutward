import React from 'react';
import { Form, InputGroup, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const ForgotPassword = () => {
    return (
        <div>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                    <p className="message"><Link to='/login'> Login ?</Link></p>
                </Form>
            </Container>
        </div>
    )
}

export default ForgotPassword;