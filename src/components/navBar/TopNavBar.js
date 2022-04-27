import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { THEME } from '../../utility/color';
 

const TopNavBar = () => {
    return (
        <div>
            <Navbar className="" collapseOnSelect  expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Inward Post</Nav.Link>
                            <Nav.Link href="#pricing">Outward Post</Nav.Link>
                            <Nav.Link href="#features">Report</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNavBar;