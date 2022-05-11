import React, { useEffect, useState } from 'react';
import { insertFrom, updateTo } from '../../actions/posts/postsAction';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import TopNavBar from '../navBar/TopNavBar';
import { useParams } from 'react-router-dom';
import { getRow } from "../../actions/posts/postsAction";

const InwardForm = () => {

    const { id } = useParams();
    console.log(id)

    const [formData, setFormData] = useState({
        inwardNo: '',
        date: '',
        nature: '',
        recievedFrom: '',
        subject: '',
        deliverTo: '',
        remark: '',
    });

    // ---- 'getRow' func defined in PostsAction, fetches specific row from database ----
    // ---- useEffect to render only once , empty '[]' makes it happn. ----
    useEffect(()=>{
        var res = getRow({ inward: true, id: id });
        console.log(res);
        res.then((value) => {
              console.log(value[0]);
              setFormData(value[0]);
            })
    },[]);

    const handleChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value });
        console.log(formData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const inward = true;
        const { inwardNo, date, nature, recievedFrom, subject, deliverTo, remark } = formData;
        if (!id) insertFrom({ inward, inwardNo, date, nature, recievedFrom, subject, deliverTo, remark });
        if (id) updateTo({ id, inward, inwardNo, date, nature, recievedFrom, subject, deliverTo, remark });
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
                                    type='number'
                                    placeholder="Inward No:"
                                    aria-label="Inward No:"
                                    aria-describedby="basic-addon1"
                                    name='inwardNo'
                                    value={formData.inwardNo}
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col >
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Date : </InputGroup.Text>

                                {/* ---- set date field type to 'text' when updating ---- */}
                                {id && <FormControl
                                    type="text"
                                    placeholder="Date"
                                    aria-label="Date"
                                    aria-describedby="basic-addon1"
                                    name='date'
                                    value={formData.date}
                                    onChange={(value) => handleChange(value)}
                                />}
                                {!id &&
                                    <FormControl
                                        type="date"
                                        placeholder="Date"
                                        aria-label="Date"
                                        aria-describedby="basic-addon1"
                                        name='date'
                                        value={formData.date}
                                        onChange={(value) => handleChange(value)}
                                    />
                                }
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
                                    value={formData.nature}
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
                                    value={formData.subject}
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
                                    value={formData.remark}
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
                                    value={formData.recievedFrom}
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
                                    value={formData.deliverTo}
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>

                    </Row>
                    <Row >
                        <Col lg={{ span: 3, offset: 5 }} md={{ span: 4, offset: 4 }} sm={{ span: 5, offset: 3 }} xs={{ span: 3, offset: 2 }} >
                            {!id && <Button className='m-4' type='submit' variant="success" >Save Inward Post</Button>}
                            { id && <Button className='m-4' type='submit' variant="success" >Update Inward Post</Button>}
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default InwardForm;

