import React, { useEffect, useState } from 'react';
import TopNavBar from '../../components/navBar/TopNavBar';
import StatusBox from '../../components/StatusBox/StatusBox';
import TableFair from '../../components/TableFair/TableFair';

import { BRIGHT_GREEN_SHADE, TEST_COLOR, ORANGE, MORE_TEAL, YELLOWISH, VIOLET, VIOLET_SHADE } from '../../utility/color';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { TABLEHEADER_SMALL, INWARD_TABLE_TITLE, OUTWARD_TABLE_TITLE, OUTWARD_TABLE_HEADER } from '../../utility/Values';
import { Grid } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import { getDisplayData } from '../../actions/posts/postsAction';


const Dashboard = () => {

    const [ren, setRen] = useState(false);

    getDisplayData({
        inward:true,
        outward:true,
        setRen
    });

    
    let INWARD_TABLE_DATA = sessionStorage.getItem('inwardTable');
    INWARD_TABLE_DATA = JSON.parse(INWARD_TABLE_DATA);

    let OUTWARD_TABLE_DATA = sessionStorage.getItem('outwardTable');
    OUTWARD_TABLE_DATA = JSON.parse(OUTWARD_TABLE_DATA);

    console.log(OUTWARD_TABLE_DATA);

    return (
        <div>
            <TopNavBar />

            <div className='desktop-view dashboard'>
                <Grid className='grid'>
                    <Row >
                        <Col xs={12} sm={12} md={12} lg={5} className="dataTable">
                            <TableFair title={INWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={INWARD_TABLE_DATA} />
                        </Col>
                        <Col md={12} sm={12} lg={5} className="dataTable">
                            <TableFair title={OUTWARD_TABLE_TITLE} tableHeaders={OUTWARD_TABLE_HEADER} tableRows={OUTWARD_TABLE_DATA} />
                        </Col>
                        <Col >
                            <Row className='display-empty-box'></Row>
                            <Row><StatusBox mainSpace="10" discription="Total Pending Post" color={VIOLET_SHADE}></StatusBox></Row>
                            <Row><StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox></Row>
                            <Row><StatusBox mainSpace="10" discription="Total Outward Post" color={BRIGHT_GREEN_SHADE}></StatusBox></Row>
                        </Col>
                    </Row>
                </Grid>
            </div>

            <div className='mobile-view dashboard'>
                <Grid className='grid'>
                    <Row>
                        <Col xs={4} sm={4}><StatusBox mainSpace="10" discription="Total Pending Post" color={VIOLET_SHADE}></StatusBox></Col>
                        <Col xs={4} sm={4}><StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox></Col>
                        <Col xs={4} sm={4}><StatusBox mainSpace="10" discription="Total Outward Post" color={BRIGHT_GREEN_SHADE}></StatusBox></Col>
                    </Row>
                    <Row >
                        <Col xs={12} sm={12} md={12} lg={5} xl={5} className="dataTable">
                            <TableFair title={INWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={INWARD_TABLE_DATA} />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={5} xl={5} className="dataTable">
                            <TableFair title={OUTWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={OUTWARD_TABLE_DATA} />
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Grid>
            </div>

            <Footer/>

        </div>
    )
}

export default Dashboard;