import React from "react";
import {Link} from 'react-router-dom';
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
        try {
            return state.posts.inwardTable;
        }
        catch {
            return 0;
        }
    });

    if (!inwardTableData) {
        return (
            <>
                <TopNavBar />
                <ButtonSpinner />
            </>
        )
    }

    return (
        <>
            <TopNavBar />
            {/* <Container fluid> */}
                <Row>
                    <Col md={10}>
                        <div className="inward-page">
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
            {/* </Container> */}


            <Footer />
        </>
    )
}


export default Inward;