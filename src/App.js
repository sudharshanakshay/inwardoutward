import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Dashboard from './pages/dashboard/dashboard';
import PrivateRoute from './components/routes/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/register' element={<Register />}></Route>
            <Route path='/dashboard' element={<PrivateRoute component={Dashboard}/>}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
