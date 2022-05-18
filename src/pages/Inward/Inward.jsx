import React, { useState } from "react";
import { Link } from 'react-router-dom';
import TopNavBar from "../../components/navBar/TopNavBar";
import { Container, Row, Col } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import { INWARD_TABLE_HEADER, TOTAL_INWARD_POST } from "../../utils/Constants";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import StatusBox from "../../components/StatusBox/StatusBox";
import { GOLDEN } from "../../utils/color";
import InwardTable from "../../components/TableFair/InwardTable";


const Inward = () => {

    // ---- load Inward Table data ---- 
    const inwardTableData = useSelector((state) => {
        console.log(state.posts.inwardTable)
        try { return state.posts.inwardTable; }
        catch { return 0; }
    });

    // ---- get inward count ----
    const inwardCount = useSelector((state)=> {
        try {
            return state.posts.inwardCount;
        }
        catch {
            return 0;
        }
    });

    if (!inwardTableData) {
        return (
            <div>
                <TopNavBar />
                <ButtonSpinner />
            </div>
        )
    }
    console.log('1')


    return (
        <div>
            <div className="h-100vh">
                <TopNavBar />
                {/* ------------------ Desktop view ------------------ */}
                <Container fluid className="desktop-view">
                    <Row>
                        <Col sm={12} md={12} lg={10}>
                            <div >

                                {/* ---------- Inward Table Content ---------- */}
                                <Container fluid>
                                    <InwardTable
                                        applyDataTableApi={true}
                                        title={"Inward Posts"}
                                        tableHeaders={INWARD_TABLE_HEADER}
                                        tableRows={inwardTableData}
                                    />
                                </Container>
                            </div>
                        </Col>
                        <Col>
                            {/* ---------- Add Inward Button ---------- */}
                            <Link to="/inwardform" className="btn btn-success" >
                                Add Inward
                            </Link>
                            {/* ---------- Inward Status Box ---------- */}
                            <StatusBox mainSpace={inwardCount} discription={TOTAL_INWARD_POST} color={GOLDEN}></StatusBox>
                        </Col>
                    </Row>
                </Container>


                {/* ------------------ Mobile view ------------------ */}
                <Container fluid className='mobile-view'>
                        <Row>
                            <Col md={{ span: 4, offset: 10 }} >
                                {/* ---------- Add Inward Button ---------- */}
                                <Link to="/inwardform" className="btn btn-success" >
                                    Add Inward
                                </Link>
                            </Col>
                        </Row>
                        <Row sm={12} md={12} lg={10}>
                            <div >
                                {/* ---------- Inward Table Content ---------- */}
                                <Container fluid>
                                    <InwardTable
                                        applyDataTableApi={true}
                                        title={"Inward Posts"}
                                        tableHeaders={INWARD_TABLE_HEADER}
                                        tableRows={inwardTableData}
                                    />
                                </Container>
                            </div>
                        </Row>
                </Container>
            </div>

            <Footer />
        </div>
    )
}


export default Inward;