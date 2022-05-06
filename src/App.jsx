import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/login';
import Register from './components/auth/register';
import PrivateRoute from './components/routes/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';
import PublicRoute from './components/routes/PublicRoute';
import Inward from './pages/Inward/Inward';
import Outward from './pages/Outward/Outward';
import Report from './pages/report/report';
import Dashboard from './pages/dashboard/Dashboard';
import ForgotPassword from './components/auth/ForgotPassword';
import Forms from './components/Forms/InwardForms';
import OUTForm from './components/Forms/OutwardForm';


function App() {

  window.onbeforeunload = (e) => {
    sessionStorage.clear()
  }
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Routes>
              {/* <Route path='/test' element={<TryLogo/>}></Route> */}
              <Route path='/' element={<PrivateRoute component={Dashboard} />}></Route>
              <Route path='/login' element={<PublicRoute component={Login} />}></Route>
              <Route path='/register' element={<PublicRoute component={Register} />}></Route>
              <Route path='/login/forgotpassword' element={<PublicRoute component={ForgotPassword} />}></Route>  
              <Route path='/dashboard' element={<PrivateRoute component={Dashboard} />}></Route>
              <Route path='/inward' element={<PrivateRoute component={Inward} />}></Route>
              <Route path='/outward' element={<PrivateRoute component={Outward} />}></Route>
              <Route path='/Report' element={<PrivateRoute component={Report} />}></Route>  
              <Route path='/inwardform' element={<PrivateRoute component={Forms}/>}></Route>
              <Route path='/outwardform' element={<PrivateRoute component={OUTForm}/>}></Route>
              
            </Routes>
          </Router>
        </Provider>
      </div>
    );
  }
  
  export default App;
  