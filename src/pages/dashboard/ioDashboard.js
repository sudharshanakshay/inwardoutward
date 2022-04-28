import React from 'react';
import TopNavBar from '../../components/navBar/TopNavBar';
import Status from '../../components/uiComponents/Status';
import TableFormat from '../../components/uiComponents/Table';

import { BRIGHT_GREEN_SHADE, TEST_COLOR, ORANGE, MORE_TEAL, YELLOWISH, VIOLET, VIOLET_SHADE } from '../../utility/color';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { TABLEHEADER_SMALL, TEST_TABLEDATA_SMALL, INWARD_TABLE_TITLE, OUTWARD_TABLE_TITLE } from '../../utility/Values';
import { Grid } from '@mui/material';


const IoDashboard = () => {
    return (
        <div>
            <TopNavBar />
            <div className='desktop-view'>
                <Grid className='grid'>
                    <Row >
                        <Col xs={12} sm={12} md={12} lg={5} className="dataTable">
                            <TableFormat title={INWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                        </Col>
                        <Col md={12} sm={12} lg={5} className="dataTable">
                            <TableFormat title={OUTWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                        </Col>
                        <Col>
                            <Row><Status mainSpace="10" discription="Total Pending Post" color={VIOLET_SHADE}></Status></Row>
                            <Row><Status mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></Status></Row>
                            <Row><Status mainSpace="10" discription="Total Outward Post" color={BRIGHT_GREEN_SHADE}></Status></Row>
                        </Col>
                    </Row>
                </Grid>
            </div>

            <div className='mobile-view'>
                <Grid className='grid'>
                    <Row>
                        <Col xs={4} sm={4}><Status mainSpace="10" discription="Total Pending Post" color={VIOLET_SHADE}></Status></Col>
                        <Col xs={4} sm={4}><Status mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></Status></Col>
                        <Col xs={4} sm={4}><Status mainSpace="10" discription="Total Outward Post" color={BRIGHT_GREEN_SHADE}></Status></Col>
                    </Row>
                    <Row >
                        <Col xs={12} sm={12} md={12} lg={5} xl={5} className="dataTable">
                            <TableFormat title={INWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5} xl={5} className="dataTable">
                            <TableFormat title={OUTWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Grid>
            </div>

        </div>
    )
}

export default IoDashboard;