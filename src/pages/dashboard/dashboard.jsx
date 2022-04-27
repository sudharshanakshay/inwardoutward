import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { logOut } from '../../actions/auth/authSlice';
import store from '../../store';
import StatusBox from '../../components/uiComponents/Status';
import TopNavBar from '../../components/navBar/TopNavBar';
import Status from '../../components/uiComponents/Status';
import SearchBar from '../../components/uiComponents/SearchBar';
import DataTable from '../../components/uiComponents/DataTable';

/* color  */
import {  BRIGHT_GREEN_SHADE, TEST_COLOR, ORANGE, MORE_TEAL, YELLOWISH, VIOLET,VIOLET_SHADE} from '../../utility/color';
import { Col, Container, Row } from 'react-bootstrap';
import { TABLEHEADER_SMALL, TEST_TABLEDATA_SMALL} from '../../utility/Values';


const Dashboard = () => {
    const isLoggedIn = useSelector((state) => state.loggedInStatus.isLoggedIn);
    const user_email = useSelector((state) => state.loggedInStatus.email);

    return (
        <div>
            <TopNavBar></TopNavBar>
            <SearchBar></SearchBar>
            <Container>
                <Row>
                    <Col>
                    <StatusBox mainSpace="10" discription="Total Pending Post" color={VIOLET_SHADE}></StatusBox></Col>
                    <Col>
                    <StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox></Col>
                    <Col>
                    <StatusBox mainSpace="10" discription="Total Outward Post" color={BRIGHT_GREEN_SHADE}></StatusBox></Col>
                </Row>
                <Row lg={{ span: 4, offset: 4 }} ></Row>
                <Row>
                    <Col md={12} sm={12} lg={6} >
                        <DataTable tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                        {/* <div className='searchBar'>
                            <StatusBox mainSpace="10" discription="Total Pending Post" color={MORETEAL}></StatusBox>
                            <StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox>
                            <StatusBox mainSpace="10" discription="Total Outward Post" color={VIOLET}></StatusBox>
                        </div> */}
                    </Col>
                    <Col md={12} sm={12} lg={6}>
                        <DataTable tableHeaders={TABLEHEADER_SMALL} tableRows={TEST_TABLEDATA_SMALL} />
                        {/* <div className='searchBar'>
                            <StatusBox mainSpace="10" discription="Total Pending Post" color={MORETEAL}></StatusBox>
                            <StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox>
                            <StatusBox mainSpace="10" discription="Total Outward Post" color={VIOLET}></StatusBox>
                        </div> */}
                    </Col>
                    {/* <Col md={12} sm={12} lg={4}>
                        <div className='searchBar'>
                            <StatusBox mainSpace="10" discription="Total Pending Post" color={MORETEAL}></StatusBox>
                            <StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox>
                            <StatusBox mainSpace="10" discription="Total Outward Post" color={VIOLET}></StatusBox>
                        </div> */}
                    {/* </Col> */}
                </Row>
            </Container>

        </div>
    )
}

export default Dashboard;


