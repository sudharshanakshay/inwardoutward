import { configureStore } from "@reduxjs/toolkit";
import authReducer from './actions/auth/authSlice';
import postsSlice from "./actions/posts/postsSlice";
import settingsSlice from "./actions/settings/settingsSlice";

export default configureStore({
    reducer: {
        loggedIn : authReducer,
        posts : postsSlice,
        settings : settingsSlice,
    },
})