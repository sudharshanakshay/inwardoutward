import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/authentication/login'
import Register from './pages/authentication/register';
import { Provider } from 'react-redux';
import store from './store';
import Inward from './pages/Inward/Inward';
import Outward from './pages/Outward/Outward';
import Dashboard from './pages/dashboard/Dashboard';
import ForgotPassword from './pages/authentication/ForgotPassword';
import InwardForms from './components/Forms/InwardForms';
import OutwardForm from './components/Forms/OutwardForm';
import ReportInward from './pages/report/reportInward';
import ReportOutward from './pages/report/reportOutward';
import Settings from './pages/Settings/Settings';
import ViewInward from './components/ViewRow/ViewInward';
import ViewOutward from './components/ViewRow/ViewOutward';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {

  window.onbeforeunload = (e) => {
    sessionStorage.clear();
  }

  
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path='/' element={<PrivateRoute component={Dashboard} />}></Route>
              <Route path='/login' element={<PublicRoute component={Login} />}></Route>
              <Route path='/register' element={<PublicRoute component={Register} />}></Route>
              <Route path='/login/forgotpassword' element={<PublicRoute component={ForgotPassword} />}></Route>  
              <Route path='/dashboard' element={<PrivateRoute component={Dashboard} />}></Route>
              <Route path='/inward' element={<PrivateRoute component={Inward} />}></Route>
              <Route path='/inward/view/:id' element={<PrivateRoute component={ViewInward} />}></Route>
              <Route path='/inward/update/:id' element={<PrivateRoute component={InwardForms} />}></Route>
              <Route path='/outward' element={<PrivateRoute component={Outward} />}></Route>
              <Route path='/outward/view/:id' element={<PrivateRoute component={ViewOutward} />}></Route>
              <Route path='/outward/update/:id' element={<PrivateRoute component={OutwardForm} />}></Route>
              <Route path='/reportInward' element={<PrivateRoute component={ReportInward} />}></Route> 
              <Route path='/reportOutward' element={<PrivateRoute component={ReportOutward} />}></Route>   
              <Route path='/inwardform' element={<PrivateRoute component={InwardForms}/>}></Route>
              <Route path='/outwardform' element={<PrivateRoute component={OutwardForm}/>}></Route>
              <Route path='/settings' element={<PrivateRoute component={Settings}/>}></Route>
            </Routes>
          </Router>
        </Provider>
      </div>
    );
  }
  
  export default App;
  