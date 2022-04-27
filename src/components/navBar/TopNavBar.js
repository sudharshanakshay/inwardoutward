import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { THEME } from '../../utility/color';
import { FiAlignJustify } from "react-icons/fi";
import Inward from '../../pages/inward/inward';
import Outward from '../../pages/outward/outward';
import { Link } from "react-router-dom";
 

const TopNavBar = () => {

    const user = useSelector((state) => state.loggedIn.email);
    const user1 = "hello";

    return (
        <div>
            <Navbar collapseOnSelect  expand="lg" >
                <Container>
                    <Navbar.Brand >
                        <Link to='/dashboard'>Home</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/inward'>Inward Post</Link>
                            <Link to='/outward'>Outward Post</Link>
                            <Link to='/report'>Report</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                Logined as {user}
                            </Nav.Link>
                            <Nav>
                                <FiAlignJustify/>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavBar;