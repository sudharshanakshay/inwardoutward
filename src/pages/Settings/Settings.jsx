import React from "react";
import { Tab, Row, Col, Nav} from "react-bootstrap";
import TopNavBar from "../../components/navBar/TopNavBar";

const Settings = () => {
    return (
        <>
            <TopNavBar />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3} md={2} lg={2} style={{backgroundColor:'#b4c2c1'}}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link variant="success" eventKey="first">Department</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Faculties</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                {/* <Sonnet /> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {/* <Sonnet /> */}

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default Settings;