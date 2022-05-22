import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';

const GoBackNavBar = ({ title }) => {
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