import React from "react";
import { Link } from 'react-router-dom';
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container, Row, Col } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { INWARD_TABLE_HEADER } from "../../utility/Constants";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";


const Inward = () => {

    const inwardTableData = useSelector((state) => {
        console.log(state.posts.inwardTable)
        try { return state.posts.inwardTable; }
        catch { return 0; }
    });

    if (!inwardTableData) {
        return (
            <div>
                <TopNavBar />
                <ButtonSpinner />
            </div>
        )
    }

    return (
        <div>
            <div className="h-100vh">
                <TopNavBar />
                <Container fluid className="desktop-view">
                    <Row>
                        <Col sm={12} md={12} lg={10}>
                            <div >
                                <Container fluid>
                                    <TableFair
                                        inward={true}
                                        applyDataTableApi={true}
                                        title={"Inward Posts"}
                                        tableHeaders={INWARD_TABLE_HEADER}
                                        tableRows={inwardTableData}
                                    />
                                </Container>
                            </div>
                        </Col>
                        <Col>
                            <Link to="/inwardform" className="btn btn-success" >
                                Add Inward
                            </Link>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className='mobile-view'>
                    <Col>
                        <Row>
                            <Col>
                                <Link to="/inwardform" className="btn btn-successRow" >
                                    Add Inward
                                </Link>
                            </Col>
                        </Row>
                        <Row sm={12} md={12} lg={10}>
                            <div >
                                <Container fluid>
                                    <TableFair
                                        inward={true}
                                        applyDataTableApi={true}
                                        title={"Inward Posts"}
                                        tableHeaders={INWARD_TABLE_HEADER}
                                        tableRows={inwardTableData}
                                    />
                                </Container>
                            </div>
                        </Row>

                    </Col>
                </Container>
            </div>

            <Footer />
        </div>
    )
}


export default Inward;