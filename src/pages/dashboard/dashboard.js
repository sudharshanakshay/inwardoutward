import React from 'react';
import { useSelector } from 'react-redux';
import StatusBox from '../../components/uiComponents/Status';
import TopNavBar from '../../components/navBar/TopNavBar';
import SearchBar from '../../components/uiComponents/SearchBar';
import Table from '../../components/uiComponents/Table';
import { BRIGHT_GREEN_SHADE, TEST_COLOR, ORANGE, MORE_TEAL, YELLOWISH, VIOLET, VIOLET_SHADE } from '../../utility/color';
import { Col, Container, Row } from 'react-bootstrap';
import { TABLEHEADER_SMALL, TEST_TABLEDATA_SMALL, INWARD_TABLE_TITLE, OUTWARD_TABLE_TITLE } from '../../utility/Values';


const Dashboard = () => {
    const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn);
    const user_email = useSelector((state) => state.loggedIn.email);

    return (
        <div>
            <Container className="align-item-center">
                <Row><TopNavBar></TopNavBar></Row>

                <Row className='row-center'>
                    <Col xs={12} sm={12} md={12} lg={5} className="dataTable">
                        <Table title={INWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                    </Col>

                    <Col md={12} sm={12} lg={5} className="dataTable">
                        <Table title={OUTWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                    </Col>

                    <Col>
                        <Row><StatusBox mainSpace="10" discription="Total Pending Post" color={VIOLET_SHADE}></StatusBox></Row>
                        <Row><StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox></Row>
                        <Row><StatusBox mainSpace="10" discription="Total Outward Post" color={BRIGHT_GREEN_SHADE}></StatusBox></Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Dashboard;
