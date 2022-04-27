import React from 'react';
import { useSelector } from 'react-redux';
import StatusBox from '../../components/uiComponents/Status';
import TopNavBar from '../../components/navBar/TopNavBar';
import SearchBar from '../../components/uiComponents/SearchBar';
import Table from '../../components/uiComponents/Table';


/* color  */
import {  BRIGHT_GREEN_SHADE, TEST_COLOR, ORANGE, MORE_TEAL, YELLOWISH, VIOLET,VIOLET_SHADE} from '../../utility/color';
import { Col, Container, Row } from 'react-bootstrap';
import { TABLEHEADER_SMALL, TEST_TABLEDATA_SMALL, INWARD_TABLE_TITLE, OUTWARD_TABLE_TITLE} from '../../utility/Values';


const Dashboard = () => {
    const isLoggedIn = useSelector((state) => state.loggedIn.isLoggedIn);
    const user_email = useSelector((state) => state.loggedIn.email);

    return (
        <div>
            <TopNavBar></TopNavBar>
            <SearchBar></SearchBar>
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={12} >
                    <StatusBox mainSpace="10" discription="Total Pending Post" color={VIOLET_SHADE}></StatusBox></Col>
                    <Col lg={4} md={4} sm={12}>
                    <StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox></Col>
                    <Col lg={4} md={4} sm={12}>
                    <StatusBox mainSpace="10" discription="Total Outward Post" color={BRIGHT_GREEN_SHADE}></StatusBox></Col>
                </Row>
                <Row lg={{ span: 4, offset: 4 }} ></Row>
                <Row>
                    <Col md={12} sm={12} lg={5} >
                        <Table title={INWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                        {/* <div className='searchBar'>
                            <StatusBox mainSpace="10" discription="Total Pending Post" color={MORETEAL}></StatusBox>
                            <StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox>
                            <StatusBox mainSpace="10" discription="Total Outward Post" color={VIOLET}></StatusBox>
                        </div> */}
                    </Col>

                    <Col lg={2}>
                        
                    </Col>

                    <Col md={12} sm={12} lg={5}>
                        <Table title={OUTWARD_TABLE_TITLE} tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                        {/* <div className='searchBar'>
                            <StatusBox mainSpace="10" discription="Total Pending Post" color={MORETEAL}></StatusBox>
                            <StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox>
                            <StatusBox mainSpace="10" discription="Total Outward Post" color={VIOLET}></StatusBox>
                        </div> */}
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Dashboard;


