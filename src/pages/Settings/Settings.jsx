import React, { useEffect, useState } from "react";
import { Tab, Nav, Button, Col, Container, Form, FormControl, InputGroup, Row, Table } from "react-bootstrap";
import { addDepartment, addEmployee, getAllDepartment } from "../../actions/settings/settingsAction";
import GoBackNavBar from "../../components/navBar/GoBackNavBar";
import PopModal from "../../components/Modals/PopModal";
import { useSelector } from "react-redux";

const Settings = () => {

    // ---- add department ----
    const [formData, setFormData] = useState({
        // departmentId : '',
        department: 'Select Department',
        name: '',
        email: '',
        phone: ''
    });

    // ---- load department list ----

    const departmentList = useSelector((state) => {
        console.log(state.settings.departmentList);
        try {
            return state.settings.departmentList;
        }
        catch (err) {
            // return [];
            console.log(err);
        }
    })

    // ---- load employee data ----
    const employeeData = useSelector((state) => {
        console.log(state.settings.employeeData);
        try {
            return state.settings.employeeData;
        }
        catch (err) {
            // return [];
            console.log(err)
        }
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData);
    }

    const handleAddDepartment = (event) => {
        event.preventDefault();
        console.log(formData.department);
        addDepartment(formData);
    }

    const handleAddEmployee = (event) => {
        event.preventDefault();
        console.log(formData);
        addEmployee(formData);
    }


    return (
        <>
            <GoBackNavBar title={' Settings '} />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    {/* ------------------- side pannel ------------------- */}
                    <Col sm={3} md={3} lg={2} style={{ backgroundColor: '#b4c2c1' }}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link variant="success" eventKey="first">Department</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Employee</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    {/* ------------------- side pannel ends here ------------------- */}

                    {/* ------------------- content pannel ------------------- */}
                    <Col sm={9} md={9} lg={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Container fluid>
                                    <Col md={8} lg={6}>
                                        {/* ---------- add department form ----------  */}
                                        <Form onSubmit={(s) => handleAddDepartment(s)}>
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
                                </Container>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <Container fluid>
                                    <Row>
                                        <Col sm={9} md={9} lg={4}>
                                            <Form onSubmit={(s) => handleAddEmployee(s)}>

                                                {/* ------------------- add employee data ------------------- */}
                                                <Row>
                                                    {/* ---------- from input select department ----------  */}
                                                    <InputGroup className="mb-3 mt-4" >
                                                        <InputGroup.Text >Department : </InputGroup.Text>
                                                        {
                                                            <select name='department' id='dropdown' onChange={(val) => { handleChange(val) }}>
                                                                <option value='' selected="selected" >{formData.department}</option>
                                                                {departmentList?.map((obj, index) => {
                                                                    return (<option >{obj.name}</option>)
                                                                })}
                                                            </select>
                                                        }
                                                    </InputGroup>
                                                </Row>

                                                <Row >
                                                    {/* ---------- form input name ----------  */}
                                                    <InputGroup className="mb-3 mt-4" >
                                                        <InputGroup.Text >Name : </InputGroup.Text>
                                                        <FormControl
                                                            type='text'
                                                            placeholder="Name"
                                                            aria-label="Name"
                                                            name='name'
                                                            onChange={(value) => handleChange(value)}
                                                        />
                                                    </InputGroup>
                                                </Row>

                                                <Row >
                                                    {/* ---------- form input email ----------  */}
                                                    <InputGroup className="mb-3 mt-4" >
                                                        <InputGroup.Text >Email : </InputGroup.Text>
                                                        <FormControl
                                                            type='email'
                                                            placeholder="Email"
                                                            aria-label="Email"
                                                            name='email'
                                                            onChange={(value) => handleChange(value)}
                                                        />
                                                    </InputGroup>
                                                </Row>

                                                <Row >
                                                    {/* ---------- form input phone number ----------  */}
                                                    <InputGroup className="mb-3 mt-4" >
                                                        <InputGroup.Text >Phone : </InputGroup.Text>
                                                        <FormControl
                                                            type='number'
                                                            placeholder="Phone"
                                                            aria-label="Phone"
                                                            name='phone'
                                                            onChange={(value) => handleChange(value)}
                                                        />
                                                    </InputGroup>
                                                </Row>

                                                <Col className="center">
                                                    <Button type='submit' variant='success' >save</Button>
                                                </Col>
                                            </Form>

                                            {/* ------------------- add employee data ends here ------------------- */}
                                        </Col>

                                        {/* ------------------- display employee list ------------------- */}


                                        <Col sm={9} md={9} lg={5} >
                                            {/* <Container fluid> */}
                                            <div className="center">

                                                <h3 >Employee Data</h3>
                                                <Table striped bordered hover size="sm">

                                                    <thead>
                                                        <th>Name</th>
                                                        <th>Department</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th>Action</th>
                                                    </thead>
                                                    <tbody>
                                                        {employeeData?.map((obj) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>{obj.employeeName}</td>
                                                                        <td>{obj.departmentName}</td>
                                                                        <td>{obj.email}</td>
                                                                        <td>{obj.phone}</td>
                                                                        <td>
                                                                            <PopModal
                                                                                mode={'delete_employee'}
                                                                                id={obj.employeeID}
                                                                                modelTitle={'Delete'}
                                                                                message={`delete employee ${obj.name} ?`}
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </div>

                                            {/* </Container> */}
                                        </Col>
                                        {/* ------------------- display employee list ends here ------------------- */}
                                    </Row>
                                </Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    {/* ------------------- content pannel ------------------- */}
                </Row>
            </Tab.Container>
        </>
    )
}

export default Settings;