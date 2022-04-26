import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { logOut } from '../../actions/auth/authSlice';
import store from '../../store';
import StatusBox from '../../components/uiComponents/Status';
import TopNavBar from '../../components/navBar/TopNavBar';
import Status from '../../components/uiComponents/Status';
import SearchBar from '../../components/uiComponents/SearchBar';

/* color  */
import { MORETEAL, VIOLET, YELLOWISH } from '../../utility/color';


const Dashboard = () => {
    const isLoggedIn = useSelector((state) => state.loggedInStatus.isLoggedIn);
    const user_email = useSelector((state) => state.loggedInStatus.email);

    return (
        <div>
            <TopNavBar></TopNavBar>
            <SearchBar></SearchBar>
            <div className='searchBar'>
                <StatusBox mainSpace="10" discription="Total Pending Post" color={MORETEAL}></StatusBox>
            </div>
            <div className='searchBar'>
                <StatusBox mainSpace="10" discription="Total Inward Post" color={YELLOWISH}></StatusBox>
            </div>
            <div className='searchBar'>
                <StatusBox mainSpace="10" discription="Total Outward Post" color={VIOLET}></StatusBox>
            </div>



        </div>
    )
}

export default Dashboard;


