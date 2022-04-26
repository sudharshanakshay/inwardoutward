import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { registerAction } from '../../actions/auth/auth';
import { useSelector } from 'react-redux';

const Login = () => {
    const isLoggedIn = useSelector((state) => state.loggedInStatus.isLoggedIn);
    console.log(isLoggedIn);

    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: ''
    });

    const {name, email, password } = formData;

    const onChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value });
        console.log(formData);
    }
    const onSubmit = (v) => {
        v.preventDefault();
        // console.log("sent " +name+ " "+ email + " " + password);
        registerAction({name,  email, password });
    }

    return (
        <div>
            <div className="login-page">
                <div className="form">
                    <form className="register-form" onSubmit={s => onSubmit(s)}>
                        <input type="text" placeholder="name"
                            name='name' onChange={change => onChange(change)} />
                        <input type="text" placeholder="email address"
                            name='email' value={email} onChange={change => onChange(change)} />
                        <input type="password" placeholder="password"
                            name='password' value={password} onChange={change => onChange(change)} />
                        <button type="submit">create</button>
                        <p className="message">Already registered ? <Link to='/login'>Sign In</Link></p>
                        
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Login;