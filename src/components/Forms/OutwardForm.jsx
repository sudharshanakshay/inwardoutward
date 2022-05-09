import React, { useState } from 'react';
import {insertFrom} from '../../actions/posts/postsAction';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import TopNavBar from '../navBar/TopNavBar';

const InwardForms = () => {

    const [formData, setFormData] = useState({
        nature : '',
        recievedFrom : '',
        subject : '',
        deliverTo : '',
        remark : '',
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
        <>
        <TopNavBar/>
            <Form onSubmit={(s)=>onSubmit(s)}>
                <Container >
                    <Row className='pt-5'>
                        <Col >
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text >Serial No : </InputGroup.Text>
                                <FormControl
                                    placeholder="Serial No : "
                                    aria-label="SerialNo"
                                    aria-describedby="basic-addon1"
                                    // onChange={(value)=> handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col >
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Date : </InputGroup.Text>
                                <FormControl
                                    type="Date"
                                    placeholder="Date"
                                    aria-label="Date"
                                    aria-describedby="basic-addon1"
                                    name=''
                                    // onChange={(value)=> handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text >Department : </InputGroup.Text>
                                <FormControl
                                    placeholder="Department"
                                    aria-label="Department"
                                    aria-describedby="basic-addon1"
                                    name='department'
                                    onChange={(value)=> handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Addressee : </InputGroup.Text>
                                <FormControl
                                    placeholder="Addressee"
                                    aria-label="Addressee"
                                    aria-describedby="basic-addon1"
                                    name='addressee'
                                    onChange={(value)=> handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={12} sm={12} md={6}  lg={4}>
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Nature : </InputGroup.Text>
                                <FormControl
                                    placeholder="Nature"
                                    aria-label="Nature"
                                    aria-describedby="basic-addon1"
                                    name='nature'
                                    onChange={(value)=> handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={12} sm={12} md={6}  lg={4}>
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Description : </InputGroup.Text>
                                <FormControl
                                    placeholder="Description"
                                    aria-label="Description"
                                    aria-describedby="basic-addon1"
                                    name='description'
                                    onChange={(value)=> handleChange(value)}
                                />
                            </InputGroup>
                        </Col>

                        <Col xs={12} sm={12} md={6}  lg={4}>
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Recipt No : </InputGroup.Text>
                                <FormControl
                                    placeholder="Recipt No"
                                    aria-label="Recipt No"
                                    aria-describedby="basic-addon1"
                                    name='recipt'
                                    onChange={(value)=> handleChange(value)}
                                />
                            </InputGroup>
                        </Col>

                        <Col xs={12} sm={12} md={6}  lg={4}>
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Remark : </InputGroup.Text>
                                <FormControl
                                    placeholder="Remark"
                                    aria-label="Remark"
                                    aria-describedby="basic-addon1"
                                    name='remark'
                                    onChange={(value)=> handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row >
                        <Col  lg={{ span: 2, offset: 5 }}  md={{ span:2, offset:2 }} sm={{ span:2, offset:2 }} >
                        <Button type='submit' variant="success" >Save Inward Post</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default InwardForms;

