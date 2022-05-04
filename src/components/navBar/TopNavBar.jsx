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

    const expand = 'sm';

    return (
        <div>

            <Navbar key={expand} expand="sm" variant="light" bg="light" >
                
                <Container fluid>
                    <Navbar.Brand>Inward-Outward</Navbar.Brand>
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
                                <Dropdown.Toggle style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none' }} id="dropdown-basic">
                                    Report
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Nav.Link >
                                        <Link to="/#" >Inward Report</Link>
                                    </Nav.Link>
                                    <Nav.Link >
                                        <Link to="/#" >Outward Report</Link>
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


                    {/* <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        // aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end">


                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Inward-Outward
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            <Nav defaultActiveKey="/home" as="ul"
                                className="justify-content-end flex-grow-1 pe-3" style={{ maxHeight: '100px' }}
                            >
                                <Link to="/dashboard" className="nav-item" >Dashboard</Link>

                                <Link to="/inward" className="nav-item">Inward Post</Link>

                                <Link to="/outward" className="nav-item" >Outward Post</Link>

                                <Dropdown>
                                    <Dropdown.Toggle style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none' }} id="dropdown-basic">
                                        Report
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Nav.Link >
                                            <Link to="/#" >Inward Report</Link>
                                        </Nav.Link>
                                        <Nav.Link >
                                            <Link to="/#" >Outward Report</Link>
                                        </Nav.Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                            <Nav>
                                <Button type="submit" onClick={() => store.dispatch(logOut())} variant="outline-success" >logOut</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas> */}


                </Container>
            </Navbar>
        </div >
    )
}

export default TopNavBar;

