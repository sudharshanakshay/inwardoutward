import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button, Offcanvas, FormControl, Form, Dropdown, NavLink, NavItem, OffcanvasHeader, Col } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { BsFillGridFill } from 'react-icons/bs';
import PopModal from "../Modals/PopModal";
import { FcSettings } from 'react-icons/fc';
import { LOGOUT } from "../../utils/Constants";
import logo from '../../utils/sahyadri-logo.png'
import store from "../../store";
import { logOut } from "../../actions/auth/authSlice";

const TopNavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const placement = 'end';

    const expand = 'md';

    return (
        <div>

            <Navbar key={expand} expand={expand} variant="light" bg="light" >

                <Container fluid className="top-nav-bar">
                    <Navbar.Brand className="nav-item">
                        <img
                            // src="https://sahyadri.edu.in/img/sahyadri-logo.png"
                            src={logo}
                            width="300"
                            height="60"
                            // className="d-inline-block align-top"
                            alt="logo"
                            style={{ margin: "0px", padding: "0px" }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}}`} />
                    <Navbar.Collapse id="navbarScroll">

                        {/* ------ Nav Items ------ */}

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
                                        <Link className="link" to="/ReportInward" >Inward Report</Link>
                                    </Nav.Link>
                                    <Nav.Link >
                                        <Link className="link" to="/ReportOutward" >Outward Report</Link>
                                    </Nav.Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>


                    </Navbar.Collapse>

                    <BsFillGridFill size="30px" onClick={handleShow} className="me-2" />

                    <Offcanvas show={show} onHide={handleClose} placement={placement} name={placement} >
                        <Container>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title >Settings</Offcanvas.Title>
                            </Offcanvas.Header>
                            
                            {/* ---- offcanvas body ---- */}
                            <Offcanvas.Body className='center' >
                                <hr />
                                {/* ---- Settings  Link Button ---- */}
                                <Link to="/settings" className="nav-item"><FcSettings size={'2em'}/> Settings </Link>
                                <hr />

                                {/* ---- logout Button ---- */}
                                <Nav as="ul"
                                    className=" my-3 my-lg-0"
                                    style={{ maxHeight: '100px' }}>
                                    {/* <Button type="submit" onClick={() => store.dispatch(logOut())} variant="outline-success" >logOut</Button> */}
                                    <Col>
                                    <PopModal 
                                        mode={LOGOUT}
                                        modelTitle={'Logout'}
                                        execFunc={()=>{store.dispatch(logOut())}}
                                        ctlBtnVariant={'outline-danger'}
                                        message={'logout from current session ?'}
                                    />
                                    </Col>
                                </Nav>
                            </Offcanvas.Body>
                        </Container>
                    </Offcanvas>
                </Container>
            </Navbar>
        </div >
    )
}

export default TopNavBar;

