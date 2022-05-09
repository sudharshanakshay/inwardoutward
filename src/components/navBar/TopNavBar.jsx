import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button, Offcanvas, FormControl, Form, Dropdown, NavLink, NavItem, OffcanvasHeader } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { logOut } from "../../actions/auth/authSlice";
import store from "../../store";


const TopNavBar = () => {

    const user = useSelector((state) => state.loggedIn.email);
    const user1 = "hello";
    const [key, setKey] = useState('Dashboard');

    const expand = 'md';

    return (
        <div>

            <Navbar key={expand} expand={expand} variant="light" bg="light" >

                <Container fluid className="top-nav-bar">
                    <Navbar.Brand className="nav-item">
                        <img
                            src="https://sahyadri.edu.in/img/sahyadri-logo.png"
                            width="300"
                            height="60"
                            // className="d-inline-block align-top"
                            alt="logo"
                            style={{margin:"0px", padding:"0px"}}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}}`} />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav defaultActiveKey="/home" as="ul"
                            className="me-auto my-3 my-lg-0"
                            style={{ maxHeight: '100px' }}
                        >
                            <Link to="/dashboard" className="nav-item" >Dashboard</Link>

                            <Link to="/inward" className="nav-item">Inward Post</Link>

                            <Link to="/outward" className="nav-item" >Outward Post</Link>

                            <Dropdown>
                                <Dropdown.Toggle className="nav-item" style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', fontSize: 'larger' }} id="dropdown-basic">
                                    Report
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Nav.Link >
                                        <Link to="/ReportInward" >Inward Report</Link>
                                    </Nav.Link>
                                    <Nav.Link >
                                        <Link to="/ReportOutward" >Outward Report</Link>
                                    </Nav.Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <Nav defaultActiveKey="/home" as="ul"
                            className=" my-3 my-lg-0"
                            style={{ maxHeight: '100px' }}>
                            <Button type="submit" onClick={() => store.dispatch(logOut())} variant="outline-success" >logOut</Button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default TopNavBar;

