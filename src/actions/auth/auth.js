import React from 'react';
import axios from 'axios';
import sha1 from 'crypto-js/sha1';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from './authSlice';
import store from '../../store';


export const LoginAction = async ({email, password})  => {

    console.log(" recieved at this auth service client side ");
    console.log(email + " " +password);    

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
        store.dispatch(logIn());
        console.log("response : "+response);
    }catch (err){
        console.log("error client side "+err);
    }

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