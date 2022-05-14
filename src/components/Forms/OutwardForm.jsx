import React, { useEffect, useState } from 'react';
import { getRow, insertFrom, updateTo } from '../../actions/posts/postsAction';
import { Button, Col, Container, Dropdown, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import TopNavBar from '../navBar/TopNavBar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OutwardForm = () => {

    // ---- get outward ID ----
    const { id } = useParams();
    console.log(id)

    const [formData, setFormData] = useState({
        serialNo: '',
        date: '',
        department: 'Select Department',
        addressee: '',
        nature: '',
        description: '',
        receiptNo: '',
        remark: '',
    });

    // ---- 'getRow' func defined in PostsAction, fetches specific row from database ----
    // ---- useEffect to render only once , empty '[]' makes it happn. ----
    useEffect(() => {
        if (id) {
            var res = getRow({ outward: true, id: id });
            res.then((value) => {
                console.log(value);
                setFormData(value[0]);
            })
        }
    }, []);

    // ---- get department ----

    const departmentList = useSelector((state) => {
        console.log(state.settings.departmentList);
        try {
            return state.settings.departmentList;
        }
        catch (err) {
            console.log(err);
        }
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const outward = true;
        const { serialNo, date, nature, department, addressee, description, receiptNo, deliverTo, remark } = formData;
        if (!id) insertFrom({ outward, serialNo, date, nature, department, addressee, description, receiptNo, deliverTo, remark });
        if (id) updateTo({ id, outward, serialNo, date, nature, department, addressee, description, receiptNo, deliverTo, remark });
    }


    return (
        <>
            <TopNavBar />
            <Form onSubmit={(s) => onSubmit(s)}>
                <Container >
                    <Row className='pt-5'>
                        <Col >
                        {/* -------- serial no -------- */}
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text >Serial No : </InputGroup.Text>
                                <FormControl
                                    
                                    placeholder="Serial No : "
                                    aria-label="SerialNo"
                                    aria-describedby="basic-addon1"
                                    name='serialNo'
                                    value={formData.serialNo}
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col >
                        {/* -------- Date -------- */}
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
                                {!id && <FormControl
                                    type="Date"
                                    placeholder="Date"
                                    aria-label="Date"
                                    aria-describedby="basic-addon1"
                                    name='date'
                                    value={formData.date}
                                    onChange={(value) => handleChange(value)}
                                />}
                            </InputGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            {/* -------- Department -------- */}
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text >Department : </InputGroup.Text>
                                { 
                                    <select name='department' id='dropdown' onChange={(val) => { handleChange(val) }}>
                                        <option value='' selected="selected" >{formData.department}</option>
                                        {departmentList.map((obj, index) => {
                                            return (
                                                <option >{obj.name}</option>
                                            )
                                        })
                                        }
                                    </select>
                                }
                            </InputGroup>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            {/* -------- Addressee -------- */}
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Addressee : </InputGroup.Text>
                                <FormControl
                                    placeholder="Addressee"
                                    name='addressee'
                                    value={formData.addressee}
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            {/* -------- Nature -------- */}
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Nature : </InputGroup.Text>
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
                            {/* -------- Description -------- */}
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Description : </InputGroup.Text>
                                <FormControl
                                    type='textarea'
                                    placeholder="Description"
                                    aria-label="Description"
                                    aria-describedby="basic-addon1"
                                    name='description'
                                    value={formData.description}
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={4}>
                            {/* -------- Recipt no -------- */}
                            <InputGroup className="mb-3 mt-4" >
                                <InputGroup.Text>Recipt No : </InputGroup.Text>
                                <FormControl
                                    placeholder="Recipt No"
                                    aria-label="Recipt No"
                                    aria-describedby="basic-addon1"
                                    name='receiptNo'
                                    value={formData.receiptNo}
                                    onChange={(value) => handleChange(value)}
                                />
                            </InputGroup>
                        </Col>

                        <Col xs={12} sm={12} md={6} lg={4}>
                            <InputGroup className="mb-3 mt-4" >
                                {/* -------- Remark -------- */}
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
                    <Row >
                        {/* -------- Form control buttons -------- */}
                        <Col lg={{ span: 3, offset: 5 }} md={{ span: 4, offset: 4 }} sm={{ span: 5, offset: 4 }} >
                            {!id && <Button type='submit' variant="success" >Save Outward Post</Button>}
                            {id && <Button type='submit' variant="success" >Update Outward Post</Button>}
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    )
}

export default OutwardForm;

