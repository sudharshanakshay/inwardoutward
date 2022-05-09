import React, {useEffect} from 'react';
import TopNavBar from '../../components/navBar/TopNavBar';
import StatusBox from '../../components/StatusBox/StatusBox';
import TableFair from '../../components/TableFair/TableFair';

import { BRIGHT_GREEN_SHADE, TEST_COLOR, ORANGE, MORE_TEAL, YELLOWISH, VIOLET, VIOLET_SHADE, GOLDEN } from '../../utility/color';
import { Button, Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { INWARD_TABLE_HEADER_SHORT, INWARD_TABLE_TITLE, OUTWARD_TABLE_TITLE, OUTWARD_TABLE_HEADER_SHORT } from '../../utility/Constants';
import Footer from '../../components/Footer/Footer';
import ButtonSpinner from '../../components/Loading/ButtonSpinner';
import { useSelector } from 'react-redux';


const Dashboard = () => {


    const inwardTableData = useSelector((state)=> {
        try {
            return state.posts.dashboardInward;
        }
        catch {
            return 0
        }
    });

    const outwardTableData = useSelector((state)=> {
        try {
            return state.posts.dashboardOutward;
        }
        catch {
            return 0;
        }
    });

    const inwardCount = useSelector((state)=> {
        try {
            return state.posts.inwardCount;
        }
        catch {
            return 0;
        }
    });

    const outwardCount = useSelector((state)=> {
        try {
            return state.posts.outwardCount;
        }
        catch {
            return 0;
        }
    });


    let pending = inwardCount - outwardCount;

    if (! outwardTableData) {
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
                            <Row><StatusBox mainSpace={pending} discription="Total Pending Post" color={VIOLET_SHADE}></StatusBox></Row>
                            {/* ---------- total inward posts ---------- */}
                            <Row><StatusBox mainSpace={inwardCount} discription="Total Inward Post" color={GOLDEN}></StatusBox></Row>
                            {/* ---------- total outward posts ---------- */}
                            <Row><StatusBox mainSpace={outwardCount} discription="Total Outward Post" color={BRIGHT_GREEN_SHADE}></StatusBox></Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='mobile-view dashboard'>
                <Container fluid>

                    {/* --------------------------- Status Box --------------------------- */}

                    <Row>
                        {/* ---------- total pending posts ---------- */}
                        <Col /*xs={4} sm={4}*/><StatusBox mainSpace={pending} discription="Total Pending Post" color={VIOLET_SHADE}></StatusBox></Col>
                        {/* ---------- total inward posts ---------- */}
                        <Col /*xs={4} sm={4} */ ><StatusBox mainSpace={inwardCount} discription="Total Inward Post" color={GOLDEN}></StatusBox></Col>
                        {/* ---------- total outward posts ---------- */}
                        <Col /*xs={4} sm={4}*/ ><StatusBox mainSpace={outwardCount} discription="Total Outward Post" color={BRIGHT_GREEN_SHADE}></StatusBox></Col>
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