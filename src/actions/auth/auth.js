import axios from 'axios';
import sha1 from 'crypto-js/sha1';
import { Route } from 'react-router-dom';

const hashPass = async ({password}) => {
    hashPass = sha1(password);
    console.log("hello there");
    console.log(hashPass);
}

export const register = async ({name, email, password})=>{
    let URL = 'http://localhost:5000/';
    let body = JSON.parse({name, email, password});

    try{
        const res = await axios.post(URL, body);
    }catch (err){
        console.log(err);
    }
}

export const login = async ({email, password}) => {
    

    console.log("this is at client side auth service");
    console.log(email + " " +password);
    
    hashPass({password});

    const config = {
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
            'Content-Type': 'application/json'
          }
    }

    const body = JSON.stringify({email, password});
    console.log(body)

    try {
        const response = await axios.post("http://localhost:5000/cors/login", body, config);
        if(response.data == '1'){
            <Route ></Route>
        }
        console.log(response);
    }catch (err){
        console.log(err);
    }

}