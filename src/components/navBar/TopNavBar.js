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

            <Navbar expand="sm" variant="light" bg="light" >
                <Container fluid>
                    <Navbar.Brand >Dashboard</Navbar.Brand>

                    <Nav defaultActiveKey="/home" as="ul"
                        className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}
                    >
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
                    <Nav>
                        <Button type="submit" onClick={()=> store.dispatch(logOut())} variant="outline-success" >logOut</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    )
}

export default TopNavBar;

