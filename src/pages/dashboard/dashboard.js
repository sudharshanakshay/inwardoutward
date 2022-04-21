import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { logOut } from '../../actions/auth/authSlice';
import store from '../../store';

const Dashboard = () => {
  const isLoggedIn = useSelector((state) => state.loggedInStatus.isLoggedIn);

  return (
    <>
      <div>dashboard : {isLoggedIn} </div>
      <button type="button" onClick={c=>store.dispatch(logOut())}>logOut</button>
    </>
  )
}

export default Dashboard;