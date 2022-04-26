import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'loggedIn',
    initialState: {
        user : null,
        email : null,
        isLoggedIn : 1, 
    },
    reducers: {
        logIn : (state) => {
            state.isLoggedIn = 1;
        },

        logOut: (state) => {
            state.isLoggedIn = 0;
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