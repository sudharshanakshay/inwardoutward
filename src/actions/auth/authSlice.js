import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'loggedIn',
    initialState: {
        user : null,
        email : "user",
        isLoggedIn : JSON.parse(localStorage.getItem('auth')) == undefined ? 1 : JSON.parse(localStorage.getItem('auth')), 
    },
    reducers: {
        logIn : (state) => {
            state.isLoggedIn = 1;
            localStorage.setItem('auth', JSON.stringify(1));
        },

        logOut: (state) => {
            state.isLoggedIn = 0;
            localStorage.setItem('auth', JSON.stringify(0));
        },

        userConfig : (state, email) => {
            // state.user = user;
            console.log(email.email);
            // state.email = email;
        }
    }
});


export const {logIn, logOut, userConfig} = authSlice.actions;
export default authSlice.reducer ;