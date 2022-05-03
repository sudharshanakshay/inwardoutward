import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { useEffect } from "react";


export const inwardSlice = createSlice({
    name: 'inwardPosts',
    initialState: {
        posts: [],
    },
    reducers: {
        setPosts: (state, rows) => {
            state.posts = rows;
        }
    }
});


export const { setPosts, getInwardPosts } = inwardSlice.actions;
export default inwardSlice.reducer;