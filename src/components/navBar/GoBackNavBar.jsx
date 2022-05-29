import React from "react";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import PopModal from "../Modals/PopModal";
import store from "../../store";
import { logOut } from "../../actions/auth/authSlice";

const GoBackNavBar = ({ title, settings = false }) => {
    const expand = 'md';
    const navigate = useNavigate();
    return (
        <div>

            <Navbar key={expand} expand={expand} variant="light" bg="light" >
                <Container fluid className="top-nav-bar">
                    <Nav>
                        <IoIosArrowBack size={'2em'} color={'white'} style={{ backgroundColor: 'blue', borderRadius: '50%' }} onClick={() => navigate(-1)} />
                        {/* <Button onClick={() => navigate(-1)}>go back</Button> */}
                    </Nav>
                    <Nav className="m-auto">
                        <Nav.Item className="" style={{ fontSize: 24 }}>{title}</Nav.Item>
                    </Nav>
                    {
                        settings &&
                        <Nav as="ul"
                            className=" my-3 my-lg-0"
                            style={{ maxHeight: '100px' }}>
                            {/* <Button type="submit" onClick={() => store.dispatch(logOut())} variant="outline-success" >logOut</Button> */}
                            <Col>
                                <PopModal
                                    mode={'logout'}
                                    modelTitle={'Logout'}
                                    execFunc={() => { store.dispatch(logOut()) }}
                                    ctlBtnVariant={'outline-danger'}
                                    message={'logout from current session ?'}
                                />
                            </Col>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </div >
    )
}

export default GoBackNavBar;