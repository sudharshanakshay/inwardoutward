import React, { useEffect, useState } from 'react';
import { insertFrom } from '../../actions/posts/postsAction';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { useSelector } from 'react-redux';
import TopNavBar from '../navBar/TopNavBar';
import { delete_from, selectRow, update_on } from "../../actions/posts/postsAction";


const FormAction = (viewMode = false) => {

    const [formData, setFormData] = useState({
        inwardNo: '',
        date: '',
        nature: '',
        recievedFrom: '',
        subject: '',
        deliverTo: '',
        remark: ''
    });

    // const id = 5;


    const viewRow = useSelector((state) => {

        console.log(state.posts.viewRow);
        try {
            return state.posts.viewRow;
        }
        catch {
            return 0;
        }
    });

    setFormData(viewRow[0]);



    // if (!viewRow) {
    //     return (
    //         <>
    //             <TopNavBar />
    //             <ButtonSpinner />
    //         </>
    //     )
    // }

    const inward = true;

    const { date, inwardNo, nature, recievedFrom, subject, deliverTo, remark } = formData;

    const handleChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value });
        console.log(formData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        insertFrom({ inward, nature, recievedFrom, subject, deliverTo, remark });
    }


    return (
        <>
            <TopNavBar />
            <Form onSubmit={(s) => onSubmit(s)}>
                <Container >
                    <Row className='pt-5'>
                        <Col >
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text >Inward No : </InputGroup.Text>
                                <FormControl
                                    placeholder="Inward No:"
                                    aria-label="Inward No:"
                                    aria-describedby="basic-addon1"
                                    name='inwardNo'
                                    onChange={(value) => handleChange(value)}
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
                                    name='date'
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text >Nature : </InputGroup.Text>
                                <FormControl
                                    placeholder="Nature"
                                    aria-label="Nature"
                                    aria-describedby="basic-addon1"
                                    name='nature'
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Subject : </InputGroup.Text>
                                <FormControl
                                    placeholder="Subject"
                                    aria-label="Subject"
                                    aria-describedby="basic-addon1"
                                    name='subject'
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={4}>
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Remark : </InputGroup.Text>
                                <FormControl
                                    placeholder="Remark"
                                    aria-label="Remark"
                                    aria-describedby="basic-addon1"
                                    name='remark'
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col xs={12} sm={12} md={6} >
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text >Recieved From : </InputGroup.Text>
                                <FormControl
                                    placeholder="Recieved"
                                    aria-label="Recieved"
                                    aria-describedby="basic-addon1"
                                    name='recievedFrom'
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={12} sm={12} md={6} >
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Deliver To : </InputGroup.Text>
                                <FormControl
                                    placeholder="Deliver"
                                    aria-label="Deliver"
                                    aria-describedby="basic-addon1"
                                    name='deliverTo'
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>

                    </Row>
                    <Row >
                        <Col lg={{ span: 2, offset: 5 }} md={{ span: 2, offset: 2 }} sm={{ span: 2, offset: 2 }} >
                            <Button type='submit' variant="success" >Save Inward Post</Button>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default FormAction;

