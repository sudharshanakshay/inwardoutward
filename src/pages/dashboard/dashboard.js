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
    <>
      {/* <StatusBox/> */}
      <TopNavBar/>
      <Status mainSpace="10" discription="discription" color="#79cfb8"/>
      <div>dashboard : {user_email} </div>
      <button type="button" onClick={c=>store.dispatch(logOut())}>logOut</button>
    </>
  )
}

export default Dashboard;