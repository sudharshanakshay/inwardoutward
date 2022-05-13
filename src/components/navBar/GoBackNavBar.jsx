import { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button, Offcanvas, FormControl, Form, Dropdown, NavLink, NavItem, OffcanvasHeader } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate, UNSAFE_NavigationContext, useNavigate } from "react-router-dom";
import { logOut } from "../../actions/auth/authSlice";
import store from "../../store";
import { BsFillGridFill } from 'react-icons/bs';
import PopModal from "../Modals/PopModal";
import { IoIosArrowBack } from 'react-icons/io';


const GoBackNavBar = ({ title }) => {
    const placement = 'end';
    const expand = 'md';
    const navigate = useNavigate();
    return (
        <div>

            <Navbar key={expand} expand={expand} variant="light" bg="light" >
                <Container fluid className="top-nav-bar">
                    <Nav>
                        <IoIosArrowBack size={'2em'} color={'white'} style={{backgroundColor:'blue', borderRadius:'50%'}} onClick={() => navigate(-1)} />
                        {/* <Button onClick={() => navigate(-1)}>go back</Button> */}
                    </Nav>
                    <Nav className="m-auto">
                        <Nav.Item className="" style={{fontSize: 24}}>{title}</Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    )
}

export default GoBackNavBar;