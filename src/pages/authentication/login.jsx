import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginAction } from '../../actions/auth/authAction';

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
        loginAction({ email, password});
    }

    return (
        <div>
            <div className="login-page">
                <div className="form">
                    <form className="login-form" onSubmit={s => onSubmit(s)}>
                        <input type="text" placeholder="email / username"
                            name='email' value={email} onChange={change => onChange(change)} />
                        <input type="password" placeholder='password'
                            name='password' value={password} onChange={change => onChange(change)} />
                        <button type="submit">login</button>

                        <p className="message">Not registered ? <Link to='/register'>Create an account</Link></p>

                        <p className="message"><Link to='/login/forgotpassword'>Forgot password ?</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

// Login.prototype = {
//     setAuth: PropTypes.func.isRequired
// }