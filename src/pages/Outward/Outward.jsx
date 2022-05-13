import React from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { OUTWARD_TABLE_HEADER } from "../../utility/Constants";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";

const Outward = () => {

    const OUTWARD_TABLE_TITLE = "Outward Table";
    const outwardTableData = useSelector((state) => {
        console.log(state.posts);
        try {
            return state.posts.outwardTable;
        }
        catch {
            return 0;
        }
    });

    if (!outwardTableData) {
        return (
            <>
                <TopNavBar />
                <ButtonSpinner />
            </>
        )
    }

    return (
        <div>
            <TopNavBar />

            <Container fluid className="desktop-view">
                <Row>
                    <Col sm={12} md={12} lg={10} >
                        <TableFair
                            outward={true}
                            applyDataTableApi={true}
                            title={OUTWARD_TABLE_TITLE}
                            tableHeaders={OUTWARD_TABLE_HEADER}
                            tableRows={outwardTableData}
                        />
                    </Col>
                    <Col>
                        <Link to="/outwardform" className="btn btn-success">Add outward</Link>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="mobile-view">
                    <Row >
                        <Col md={{ span: 4, offset: 10 }}>
                            <Link to="/outwardform" className="btn btn-success">Add outward</Link>
                        </Col>
                    </Row>
                    <Row sm={12} md={12} lg={10} >
                        <TableFair
                            outward={true}
                            applyDataTableApi={true}
                            title={OUTWARD_TABLE_TITLE}
                            tableHeaders={OUTWARD_TABLE_HEADER}
                            tableRows={outwardTableData}
                        />
                    </Row>
            </Container>
            <Footer />
        </div>
    )
}


export default Outward;