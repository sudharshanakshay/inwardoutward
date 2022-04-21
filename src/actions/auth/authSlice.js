import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'loggedInStatus',
    initialState: {
        user : null,
        isLoggedIn : 0, 
    },
    reducers: {
        logIn : (state) => {
            state.isLoggedIn = 1;
        },

        logOut: (state) => {
            state.isLoggedIn = 0;
        }
    }
});


export const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer ;