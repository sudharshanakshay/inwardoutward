import axios from 'axios';
import { logIn, userConfig } from './authSlice';
import store from '../../store';
import { LOGIN_URL, REGISTER_URL, CONFIG } from '../../utility/Values';
import bcrypt from 'bcryptjs/dist/bcrypt';
import bcryptjs from 'bcryptjs';


const hashPass = (password) => {
    const salt = bcryptjs.genSaltSync(5);
    const passHash = bcryptjs.hashSync(password, 0);
    return passHash;
}

export const loginAction = async ({ email, password, setAuth }) => {
    const passHash = hashPass(password);
    const body = JSON.stringify({
        'email': email,
        'password': password
    });

    try {
        const res = await axios.post(LOGIN_URL, body, CONFIG);
        console.log("res : " + res.data.password);
        if (await bcryptjs.compareSync(password, res.data.password)) {
            store.dispatch(logIn());
            store.dispatch(userConfig({ 'email': email }));
        }
    } catch (err) {
        console.log("error client side " + err);
    }
}

export const registerAction = async ({ name, email, password }) => {
    const passHash = hashPass(password);
    const body = JSON.stringify({
        'name': name,
        'email': email,
        'password': passHash
    });

    console.log(body);

    try {
        const res = await axios.post(REGISTER_URL, body, CONFIG);
        if (res.data.register == "successful") {
            store.dispatch(logIn());
            store.dispatch(userConfig({ 'email': email }));
        }

    } catch (err) {
        console.log(err);
    }
}