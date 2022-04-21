import axios from 'axios';
import { logIn } from './authSlice';
import store from '../../store';
import { LOGIN_URL, REGISTER_URL, CONFIG } from '../../utility/GeneralUtility';


export const LoginAction = async ({email, password})  => {
    
    const body = JSON.stringify({email, password});

    try {
        const response = await axios.post(LOGIN_URL, body, CONFIG);
        store.dispatch(logIn());
        console.log("response : "+response);
    }catch (err){
        console.log("error client side "+err);
    }
}

export const register = async ({name, email, password})=>{

    let body = JSON.parse({name, email, password});

    try{
        const res = await axios.post(REGISTER_URL, body, CONFIG);
    }catch (err){
        console.log(err);
    }
}