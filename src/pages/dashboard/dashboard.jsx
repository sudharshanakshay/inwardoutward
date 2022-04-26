import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { logOut } from '../../actions/auth/authSlice';
import store from '../../store';
import StatusBox from '../../components/uiComponents/Status';
import TopNavBar from '../../components/navBar/TopNavBar';
import Status from '../../components/uiComponents/Status';

const Dashboard = () => {
    const isLoggedIn = useSelector((state) => state.loggedInStatus.isLoggedIn);
    const user_email = useSelector((state) => state.loggedInStatus.email);

    return (
        <div>
            <TopNavBar></TopNavBar>
        </div>
    )
}

export default Dashboard;


