import React, { useEffect, useState } from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Tab, Nav, Button, Col, Container, Form, FormControl, InputGroup, Row, Table } from "react-bootstrap";
import { addDepartment, getAllDepartment } from "../../actions/settings/settingsAction";
import GoBackNavBar from "../../components/navBar/GoBackNavBar";
import PopModal from "../../components/Modals/PopModal";
import { useSelector } from "react-redux";


const Settings = () => {

    // ---- add department ----
    const [formData, setFormData] = useState({
        department: ''
    });

    const handleChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value });
        console.log(formData);
    }

    const onSubmit = (s) => {
        s.preventDefault();
        console.log(formData.department);
        addDepartment(formData);
    }

    // ---- get department ----

    const departmentList = useSelector((state)=>{
        console.log(state.settings.departmentList);
        try {
            return state.settings.departmentList;
        }
        catch (err) {
            console.log(err);
        }
    })


    return (
        <>
            <GoBackNavBar title={' Settings '} />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} md={2} lg={2} style={{ backgroundColor: '#b4c2c1' }}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link variant="success" eventKey="first">Department</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Employee</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} md={4} lg={4}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Col>
                                {/* ---------- add department form ----------  */}
                                <Form onSubmit={(s) => onSubmit(s)}>
                                    <InputGroup className="mb-3 mt-4" >
                                        {/* <InputGroup.Text >Add Department : </InputGroup.Text> */}

                                        <FormControl
                                            placeholder="Add Department"
                                            name='department'
                                            autocomplete="off"
                                            onChange={(value) => handleChange(value)}
                                        />
                                        <Button variant='success' type='submit' >Add</Button>
                                    </InputGroup>
                                </Form>
                                {/* ---------- add department form ends here ----------  */}

                                {/* ---------- display department list ---------- */}
                                <Table striped hover bordered size="sm">
                                    <thead>
                                        <td>Department</td>
                                        <td>Actions</td>
                                    </thead>
                                    <tbody>
                                    {departmentList?.map((obj) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{obj.name}</td>
                                                    <td>
                                                        <PopModal
                                                            mode={'department_delete'}
                                                            id={obj.departmentID}
                                                            modelTitle={'Delete'}
                                                            message={`delete branch ${obj.name} ?`}
                                                        />
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                    </tbody>
                                </Table>
                                {/* ---------- display department list ends here ---------- */}
                                </Col>

                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                {/* <Sonnet /> */}
                                

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>

                    <Col>


                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default Settings;