import { configureStore } from "@reduxjs/toolkit";
import authReducer from './actions/auth/authSlice';
import inwardSlice from "./actions/posts/postsSlice";

export default configureStore({
    reducer: {
        loggedIn : authReducer,
        inwardPosts : inwardSlice
    },
})