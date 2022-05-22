import axios from 'axios';
import { logIn, userConfig } from './authSlice';
import store from '../../store';
import { LOGIN_URL, REGISTER_URL, CONFIG, SUCCESS } from '../../utils/Constants';

export const loginAction = async ({ email, password, setAuth }) => {

    const body = JSON.stringify({
        'email': email,
        'password': password
    });

    try {
        await axios.post(LOGIN_URL, body, CONFIG)
        .then((res) => {
            if(res.data.status === SUCCESS){
                store.dispatch(logIn());
            }
        })

    } catch (err) {
        console.debug("error client side " + err);
    }
}

export const registerAction = async ({ name, email, password }) => {

    const body = JSON.stringify({
        'name': name,
        'email': email,
        'password': password 
    });

    console.debug(body);

    try {
        const res = await axios.post(REGISTER_URL, body, CONFIG);
        if (res.data.status === SUCCESS) {
            store.dispatch(logIn());
            store.dispatch(userConfig({ 'email': email }));
        }

    } catch (err) {
        console.debug(err);
    }
}