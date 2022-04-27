import { configureStore } from "@reduxjs/toolkit";
import authReducer from './actions/auth/authSlice';

export default configureStore({
    reducer: {
        loggedIn : authReducer
    },
})