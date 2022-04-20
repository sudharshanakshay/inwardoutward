import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from '../auth/register'

const Register = () => {

    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    );

    const { name, email, password } = formData;

    const onChange = (change) => {
        setFormData({ ...formData, [change.target.name]: change.target.value });
        console.log(formData);
    }
    const onSubmit = (v) => {
        v.preventDefault();
        register({ name, email, password });
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
                        <button>create</button>
                        <p className="message">Already registered? <Link to='/login'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )       
}

export default Register