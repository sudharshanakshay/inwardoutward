import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerAction } from '../../actions/auth/authAction';

const Register = () => {
    // const isLoggedIn = useSelector((state) => state.loggedInStatus.isLoggedIn);
    // console.debug(isLoggedIn);

    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: ''
    });

    const {name, email, password } = formData;

    const onChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value });
        console.debug(formData);
    }
    const onSubmit = (v) => {
        v.preventDefault();
        // console.debug("sent " +name+ " "+ email + " " + password);
        registerAction({name,  email, password });
    }

    return (
        <div style={{width: '100%', height:'100%' ,backgroundColor:'#a9ffab'}}>
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

export default Register;