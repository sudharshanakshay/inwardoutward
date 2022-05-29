import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loginAction } from '../../actions/auth/authAction';
import { CREATE_ACC_TEXT, NOT_REGISTERED_TEXT } from '../../utils/Constants';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    const onChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value });
        console.debug(formData);
    }
    const onSubmit = (v) => {
        v.preventDefault();
        // console.debug("sent " + email + " " + password);
        loginAction({ email, password });
    }

    return (
        <>
            {/* <style type='text/css'>
                {`
                    .login-page {
                        width: 360px;
                        height: 100%;
                        allign
                        // padding: 8% 0 0;
                        margin: auto;
                    }
                `}
            </style> */}

            
            <div style={{width: '100%', height:'100%' ,backgroundColor:'#a9ffab'}}>
                <div className="login-page">
                    <div className="form">
                        <form className="login-form" onSubmit={s => onSubmit(s)}>
                            <input type="text" placeholder="email/username"
                                name='email' value={email} onChange={change => onChange(change)} />
                            <input type="password" placeholder='password'
                                name='password' value={password} onChange={change => onChange(change)} />
                            <button type="submit">login</button>

                            <p className="message">{NOT_REGISTERED_TEXT}&nbsp;<Link to='/register'>{CREATE_ACC_TEXT}</Link></p>

                            {/* <p className="message"><Link to='/login/forgotpassword'>Forgot password ?</Link></p> */}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
