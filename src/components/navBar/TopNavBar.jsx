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
                
                <Container fluid className="top-nav-bar">
                    <Navbar.Brand className="nav-item">Inward-Outward</Navbar.Brand>
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
                                <Dropdown.Toggle className="nav-item" style={{ backgroundColor: '#ffffff', color: '#000000', border: 'none', fontSize:'larger' }} id="dropdown-basic">
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
                </Container>
            </Navbar>
        </div >
    )
}

export default TopNavBar;

