import React, { useState } from "react";
import { Tab, Nav, Button, Col, Container, Form, FormControl, InputGroup, Row, Table } from "react-bootstrap";
import { addDepartment, addEmployee, delDepartment, delEmployee } from "../../actions/settings/settingsAction";
import GoBackNavBar from "../../components/navBar/GoBackNavBar";
import PopModal from "../../components/Modals/PopModal";
import { useSelector } from "react-redux";
import { DELETE, DEPARTMENT_TABLE_HEADER, EMPLOYEE_TABLE_HEADER } from "../../utils/Constants";


const Settings = () => {

    // ---- add department ----
    const [formData, setFormData] = useState({
        // departmentId : '',
        department: 'Select Department',
        name: '',
        email: '',
        phone: '',
        body: localStorage.getItem('body'),
        subject: localStorage.getItem('subject')
    });

    // ---- load department list ----

    const departmentList = useSelector((state) => {
        console.debug(state.settings.departmentList);
        try {
            return state.settings.departmentList;
        }
        catch (err) {
            // return [];
            console.debug(err);
        }
    })

    // ---- load employee data ----

    const employeeData = useSelector((state) => {
        console.debug(state.settings.employeeData);
        try {
            return state.settings.employeeData;
        }
        catch (err) {
            // return [];
            console.debug(err)
        }
    })


    const handleChange = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value });

        // ---- save subject & body of email to localStorage ----

        if(event.target.name === 'subject') localStorage.setItem('subject', event.target.value);
        if(event.target.name === 'body') localStorage.setItem('body', event.target.value);
    }

    const handleAddDepartment = (event) => {
        event.preventDefault();
        addDepartment(formData);
    }

    const handleAddEmployee = (event) => {
        event.preventDefault();
        addEmployee(formData);
    }


    return (
        <>
            <GoBackNavBar title={' Settings '} settings={true}/>
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
                            <Nav.Item>
                                <Nav.Link eventKey="third">Email</Nav.Link>
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
                                                    autoComplete="off"
                                                    onChange={(value) => handleChange(value)}
                                                />
                                                <Button variant='success' type='submit' >Add</Button>
                                            </InputGroup>
                                        </Form>
                                        {/* ---------- add department form ends here ----------  */}

                                        {/* ---------- display department list ---------- */}
                                        <Table striped hover bordered size="sm">
                                            <thead>
                                                <tr>
                                                {DEPARTMENT_TABLE_HEADER.map((val, index) => {
                                                    return(
                                                        <>
                                                            <th key={index}>{val}</th>
                                                        </>
                                                    )
                                                })}
                                                    {/* <th>Department</th>
                                                    <th>Actions</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {departmentList?.map((obj, index) => {
                                                    return (
                                                        <>
                                                            <tr key={obj.departmentID}>
                                                                <td>{obj.name}</td>
                                                                <td>
                                                                    <PopModal
                                                                        mode={DELETE}
                                                                        
                                                                        execFunc={() => delDepartment({ rowID: obj.departmentID })}
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
                                                    {/* ---------- form input select department ----------  */}
                                                    <InputGroup className="mb-3 mt-4" >
                                                        <InputGroup.Text >Department : </InputGroup.Text>
                                                        {
                                                            <select name='department' className='color-border' id='dropdown' onChange={(val) => { handleChange(val) }}>
                                                                <option value='' key='' >{formData.department}</option>
                                                                {departmentList?.map((obj, index) => {
                                                                    return (<option key={index}>{obj.name}</option>)
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
                                                        <tr>
                                                            {EMPLOYEE_TABLE_HEADER.map((val, index) => {
                                                                return(
                                                                    <>
                                                                    <th key={index}>{val}</th>
                                                                    </>
                                                                )
                                                            })}
                                                            {/* <th>Name</th>
                                                            <th>Department</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Action</th> */}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {employeeData?.map((obj, index) => {
                                                            return (
                                                                <>
                                                                    <tr key={obj.employeeID}>
                                                                        <td>{obj.employeeName}</td>
                                                                        <td>{obj.departmentName}</td>
                                                                        <td>{obj.email}</td>
                                                                        <td>{obj.phone}</td>
                                                                        <td>
                                                                            <PopModal
                                                                                mode={DELETE}
                                                                                modelTitle={'Delete'}
                                                                                execFunc={() => { delEmployee({ rowID: obj.employeeID }) }}
                                                                                message={`delete employee ${obj.employeeName} ?`}
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
                            <Tab.Pane eventKey="third" >
                                <Container>
                                    <Row>
                                        <Col sm={10} md={8} lg={6}>
                                            <InputGroup className="mb-3 mt-4" >
                                                <InputGroup.Text >Subject : </InputGroup.Text>
                                                <FormControl
                                                    placeholder="subject"
                                                    name='subject'
                                                    value={formData.subject}
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </InputGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col sm={10} md={8} lg={6}>
                                            <InputGroup className="mb-3 mt-4" >
                                                <InputGroup.Text >Email content : </InputGroup.Text>

                                                <FormControl
                                                    as='textarea'
                                                    placeholder="body"
                                                    name='body'
                                                    value={formData.body}
                                                    onChange={(e) => handleChange(e)}
                                                />

                                            </InputGroup>
                                        </Col>
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