import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../actions/auth/authSlice";
import store from "../../store";
 

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
                                <button type="submit" onClick={()=>store.dispatch(logOut())}>logout</button>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavBar;