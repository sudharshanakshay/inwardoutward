import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button, Offcanvas, FormControl, Form } from "react-bootstrap";
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

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                                <Nav.Link>
                                    <Link to="/dashboard" >Dashboard</Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to="/inward" >Inward Post</Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to="/outward" >Outward Post</Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to="/report" >Report</Link>
                                </Nav.Link>

                        </Nav>
                        <Nav.Item><Button variant="outline-success" onClick={() => store.dispatch(logOut())} > Logout</Button></Nav.Item>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                <Container fluid>
                    <Navbar.Brand >Inward Outward</Navbar.Brand>

                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>

                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Inward Outward
                            </Offcanvas.Title>

                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-2">
                                <Nav.Link>
                                    <Link to="/dashboard" >Dashboard</Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to="/inward" >Inward Post</Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to="/outward" >Outward Post</Link>
                                </Nav.Link>

                                <Nav.Link >
                                    <Link to="/report" >Report</Link>
                                </Nav.Link>

                                <Nav.Item><Button variant="outline-success" onClick={() => store.dispatch(logOut())} > Logout</Button></Nav.Item>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Nav className="justify-content-end">

            </Nav> */}




        </div >
    )
}

export default TopNavBar;

