import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/login';
import Register from './components/auth/register';
import PrivateRoute from './components/routes/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';
import PublicRoute from './components/routes/PublicRoute';
import Inward from './pages/inward/inward';
import Outward from './pages/outward/outward';
import Report from './pages/report/report';
import IoDashboard from './pages/dashboard/ioDashboard';
import useAuth from './actions/Hooks/useAuth';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<PrivateRoute component={IoDashboard} />}></Route>
            <Route path='/login' element={<PublicRoute component={Login} />}></Route>
            <Route path='/register' element={<PublicRoute component={Register} />}></Route>
            <Route path='/dashboard' element={<PrivateRoute component={IoDashboard} />}></Route>
            <Route path='/inward' element={<PrivateRoute component={Inward} />}></Route>
            <Route path='/outward' element={<PrivateRoute component={Outward} />}></Route>
            <Route path='/Report' element={<PrivateRoute component={Report} />}></Route>  
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
