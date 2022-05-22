import React from 'react';
import TopNavBar from '../../components/navBar/TopNavBar';
import StatusBox from '../../components/StatusBox/StatusBox';
import TableFair from '../../components/TableFair/TableFair';
import { BRIGHT_GREEN_SHADE, VIOLET_SHADE, GOLDEN } from '../../utils/color';
import { Col, Container, Row } from 'react-bootstrap';
import { INWARD_TABLE_HEADER_SHORT, INWARD_TABLE_TITLE, OUTWARD_TABLE_TITLE, OUTWARD_TABLE_HEADER_SHORT, TOTAL_OUTWARD_POST, TOTAL_INWARD_POST, TOTAL_POST } from '../../utils/Constants';
import Footer from '../../components/Footer/Footer';
import ButtonSpinner from '../../components/Loading/ButtonSpinner';
import { useSelector } from 'react-redux';


const Dashboard = () => {

    // ---- load dashboard inward table data ----
    const inwardTableData = useSelector((state)=> {
        try {
            return state.posts.dashboardInward;
        }
        catch {
            return 0;
        }
    });

    // ---- load dashboard outward table data ----
    const outwardTableData = useSelector((state)=> {
        try {
            return state.posts.dashboardOutward;
        }
        catch {
            return 0;
        }
    });

    // ---- load inward count ----
    const inwardCount = useSelector((state)=> {
        try {
            return state.posts.inwardCount;
        }
        catch {
            return 0;
        }
    });


    // ---- load outward count ----
    const outwardCount = useSelector((state)=> {
        try {
            return state.posts.outwardCount;
        }
        catch {
            return 0;
        }
    });


    // ---- calculate pending count ----
    let pending = inwardCount + outwardCount ;
    // pending = pending < 0 ? 0 : pending ; 

    // ---- load spinner while loading ----
    if (!outwardTableData || !inwardTableData || !inwardCount || !outwardCount) {
        return ( 
            <>
                <TopNavBar />
                <ButtonSpinner />
            </>
        )
    }

    // ---- actual dashboard UI ----
    return (
        <div>
            <TopNavBar />

            {/* ----------------------- Desktop View -----------------------  */}

            <div className='desktop-view'>
                <Container fluid>
                    <Row >
                        {/* --------------------------- Inward Table --------------------------- */}
                        <Col xs={12} sm={12} md={12} lg={5} >
                            <TableFair
                                inward={true}
                                title={INWARD_TABLE_TITLE}
                                tableHeaders={INWARD_TABLE_HEADER_SHORT}
                                tableRows={inwardTableData}
                            />

                        </Col>

                        {/* --------------------------- Outward Table --------------------------- */}
                        <Col md={12} sm={12} lg={5} >
                            <TableFair
                                outward={true}
                                title={OUTWARD_TABLE_TITLE}
                                tableHeaders={OUTWARD_TABLE_HEADER_SHORT}
                                tableRows={outwardTableData} />
                        </Col>

                        {/* --------------------------- Status Box --------------------------- */}

                        <Col >
                            {/* <Row className='display-empty-box'></Row> */}
                            {/* ---------- total pending posts ---------- */}
                            <Row><StatusBox mainSpace={pending} discription={TOTAL_POST} color={VIOLET_SHADE}></StatusBox></Row>
                            {/* ---------- total inward posts ---------- */}
                            <Row><StatusBox mainSpace={inwardCount} discription={TOTAL_INWARD_POST} color={GOLDEN}></StatusBox></Row>
                            {/* ---------- total outward posts ---------- */}
                            <Row><StatusBox mainSpace={outwardCount} discription={TOTAL_OUTWARD_POST} color={BRIGHT_GREEN_SHADE}></StatusBox></Row>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* ----------------------- Mobile View -----------------------  */}

            <div className='mobile-view'>
                <Container fluid>

                    {/* --------------------------- Status Box --------------------------- */}

                    <Row>
                        {/* ---------- total pending posts ---------- */}
                        <Col /*xs={4} sm={4}*/><StatusBox mainSpace={pending} discription={TOTAL_POST} color={VIOLET_SHADE}></StatusBox></Col>
                        {/* ---------- total inward posts ---------- */}
                        <Col /*xs={4} sm={4} */ ><StatusBox mainSpace={inwardCount} discription={TOTAL_INWARD_POST} color={GOLDEN}></StatusBox></Col>
                        {/* ---------- total outward posts ---------- */}
                        <Col /*xs={4} sm={4}*/ ><StatusBox mainSpace={outwardCount} discription={TOTAL_OUTWARD_POST} color={BRIGHT_GREEN_SHADE}></StatusBox></Col>
                    </Row>
                    <Row >
                        {/* --------------------------- Inward Table --------------------------- */}
                        <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                            <TableFair
                                inward={true}
                                title={INWARD_TABLE_TITLE}
                                tableHeaders={INWARD_TABLE_HEADER_SHORT}
                                tableRows={inwardTableData}
                            />
                        </Col>

                        {/* --------------------------- Outward Table --------------------------- */}
                        <Col xs={12} sm={12} md={12} lg={5} xl={5}>
                            <TableFair
                                outward={true}
                                title={OUTWARD_TABLE_TITLE}
                                tableHeaders={OUTWARD_TABLE_HEADER_SHORT}
                                tableRows={outwardTableData} />
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>

            <Footer />

        </div>
    )
}

export default Dashboard;