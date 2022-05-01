import { createSlice } from "@reduxjs/toolkit"


export const postsSlice = createSlice({
    name: 'inwardPosts',
    initialState: {
        posts : null,
    },
    reducers : {
        setPosts : (state, rows) => {
            state.posts = rows;
        }
    }
});


export const {setPosts} = postsSlice.actions;
export default postsSlice.reducer;