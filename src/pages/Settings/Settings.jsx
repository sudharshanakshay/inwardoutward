import React, { useEffect, useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Tab, Nav, Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { addDepartment, getAllDepartment } from "../../actions/settings/settingsAction";


const Settings = () => {

    const [formData, setFormData] = useState({
        department: ''
    });

    const handleChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value });
        console.log(formData);
    }

    const department = formData;

    const onSubmit = (s) => {
        s.preventDefault();
        addDepartment(department);
        console.log(department);
    }

    const [deptData, setDeptData] = useState();

    useEffect(() => {
        const dept = getAllDepartment();
        dept.then((val) => {
            setDeptData(val);
        })
    }, []);

    console.log(deptData);


    return (
        <>
            <TopNavBar />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} md={2} lg={2} style={{ backgroundColor: '#b4c2c1' }}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link variant="success" eventKey="first">Department</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Faculties</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} md={4} lg={4}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Form onSubmit={(s) => onSubmit(s)}>
                                    <InputGroup className="mb-3 mt-4" >
                                        <InputGroup.Text >Add Department : </InputGroup.Text>

                                        <FormControl
                                            placeholder="Enter Department"
                                            aria-label="SerialNo"
                                            aria-describedby="basic-addon1"
                                            name='department'
                                            onChange={(value) => handleChange(value)}
                                        />
                                    </InputGroup>

                                    <Button variant='success' type='submit' >Add</Button>
                                </Form>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                {/* <Sonnet /> */}

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>

                    <Col>
                        <ui>
                            {deptData?.map((value) => {
                                <li>{value.name}</li>
                            })}
                        </ui>

                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default Settings;