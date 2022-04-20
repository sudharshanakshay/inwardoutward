import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from './components/auth/login';
import Register from './components/auth/register';
import { configureStore } from '@reduxjs/toolkit'

function App() {

  // authentication sate
  const isAuthenticated = {value:false};

  // action-object for the use of react-redux
  const actionLogin = {
    type:'auth/login',
    payload: 'signin'
  }

  const actionLogout = {
    type: 'auth/logout',
    payload: 'signout'
  }

  // authReducer
  // const authReducer = (state =; isAuthenticated, actionLogin) =>{
    // if (authAction.type === 'auth/login'){
    //   return {
    //       ...state, value: !
    //   }
    // }
  // }
  
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
