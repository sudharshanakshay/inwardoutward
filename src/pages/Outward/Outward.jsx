import React from "react";
import TopNavBar from "../../components/navBar/TopNavBar";
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import TableFair from "../../components/TableFair/TableFair";
import {  OUTWARD_TABLE_HEADER, TOTAL_OUTWARD_POST } from "../../utils/Constants";
import ButtonSpinner from "../../components/Loading/ButtonSpinner";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import StatusBox from "../../components/StatusBox/StatusBox";
import { BRIGHT_GREEN_SHADE } from "../../utils/color";
import OutwardTable from "../../components/TableFair/OutwardTable";

const Outward = () => {

    const OUTWARD_TABLE_TITLE = "Outward Table";

    // ---- load Outward Table Data ----
    const outwardTableData = useSelector((state) => {
        console.debug(state.posts);
        try {
            return state.posts.outwardTable;
        }
        catch {
            return 0;
        }
    });

    // ---- get outward count ----
    const outwardCount = useSelector((state)=> {
        try {
            return state.posts.outwardCount;
        }
        catch {
            return 0;
        }
    });

    // ---- loading... ----
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
            <div className="h-100vh">

                {/* ------------------ Desktop view ------------------ */}
                <Container fluid className="desktop-view">
                    <Row>
                        <Col sm={12} md={12} lg={10} >

                            {/* ---------- Outward Table Content ---------- */}
                            <OutwardTable
                                outward={true}
                                applyDataTableApi={true}
                                title={OUTWARD_TABLE_TITLE}
                                tableHeaders={OUTWARD_TABLE_HEADER}
                                tableRows={outwardTableData}
                            />
                        </Col>
                        <Col>
                            {/* ---------- Add Outward Button ---------- */}
                            <Link  to="/outwardform" className="btn btn-success">Add outward</Link>

                            {/* ---------- Outward Status Box ---------- */}
                            <StatusBox 
                                mainSpace={outwardCount}
                                discription={TOTAL_OUTWARD_POST}
                                color={BRIGHT_GREEN_SHADE}
                            />
                        </Col>
                    </Row>
                </Container>

                {/* ------------------ Mobile view ------------------ */}
                <Container fluid className="mobile-view">
                    <Row >
                        <Col md={{ span: 4, offset: 10 }}>
                            {/* ---------- Add Outward Button ---------- */}
                            <Link to="/outwardform" className="btn btn-success">Add outward</Link>
                        </Col>
                    </Row>
                    <Row sm={12} md={12} lg={10} >

                        {/* ---------- Outward Table Content ---------- */}
                        <TableFair
                            outward={true}
                            applyDataTableApi={true}
                            title={OUTWARD_TABLE_TITLE}
                            tableHeaders={OUTWARD_TABLE_HEADER}
                            tableRows={outwardTableData}
                        />
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}


export default Outward;