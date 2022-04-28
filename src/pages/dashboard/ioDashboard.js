import React from 'react';
import TopNavBar from '../../components/navBar/TopNavBar';
import Status from '../../components/uiComponents/Status';

import { BRIGHT_GREEN_SHADE, TEST_COLOR, ORANGE, MORE_TEAL, YELLOWISH, VIOLET, VIOLET_SHADE } from '../../utility/color';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { TABLEHEADER_SMALL, TEST_TABLEDATA_SMALL, INWARD_TABLE_TITLE, OUTWARD_TABLE_TITLE } from '../../utility/Values';


const IoDashboard = () => {
    return (
        <div>
            <TopNavBar />
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={5} className="dataTable">
                        <Table title={INWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                    </Col>
                    <Col md={12} sm={12} lg={5} className="dataTable">
                        <Table title={OUTWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                    </Col>
                    <Col>
                        <Row><Status mainSpace="10" discription="Total Pending Post" color={VIOLET_SHADE}></Status></Row>
                        <Row><Status mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></Status></Row>
                        <Row><Status mainSpace="10" discription="Total Outward Post" color={BRIGHT_GREEN_SHADE}></Status></Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default IoDashboard;