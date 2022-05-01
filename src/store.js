import { configureStore } from "@reduxjs/toolkit";
import authReducer from './actions/auth/authSlice';
import postsSlice from "./actions/posts/postsSlice";

export default configureStore({
    reducer: {
        loggedIn : authReducer,
        inwardPosts : postsSlice
    },
})