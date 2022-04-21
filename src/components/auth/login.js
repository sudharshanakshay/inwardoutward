import React, { Component, useState } from 'react';
import { Link, Navigate} from 'react-router-dom';
import { LoginAction } from '../../actions/auth/auth';
import { useSelector } from 'react-redux';

const Login = () => {

    const isLoggedIn = useSelector((state) => state.loggedInStatus.isLoggedIn );
    console.log(isLoggedIn);
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const onChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value });
        console.log(formData);
    }
    const onSubmit = (v) => {
        v.preventDefault();
        console.log("sent " + email + " "+password);
        LoginAction({ email, password });
    }

    return (
        <div>
            { isLoggedIn && <Navigate replace to="/dashboard" />}
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={s=>onSubmit(s)}>
                        <input type="text" placeholder="email / username" 
                        name='email' value={email} onChange={change=>onChange(change)}/>
                        <input type="password" placeholder='password' 
                        name='password' value={password} onChange={change=>onChange(change)}/>
                        <button type="submit">login</button>
                        
                        <p className="message">Not registered ? <Link to='/register'>Create an account</Link></p>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Login;