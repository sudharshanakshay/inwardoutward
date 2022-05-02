import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { useEffect } from "react";
import { CONFIG, DISPLAY_URL } from "../../utility/Values";


export const inwardSlice = createSlice({
    name: 'inwardPosts',
    initialState: {
        posts: [],
    },
    reducers: {
        setPosts: (state, rows) => {
            state.posts = rows;
        },

        getPosts: async (state) => {
            let rows = [];

            try {
                await axios.get(DISPLAY_URL, CONFIG)
                    .then((res) => {
                        console.log(res.data)
                        res.data.rows.map((row, index) => {
                            rows.push(row);
                        })
                        console.log("getDisplayData");
                        const inwardTable = JSON.stringify(rows);
                        sessionStorage.setItem('inwardTable', inwardTable);
                    })
            }
            catch (err) {
                console.log(err);
            }
        }
    }
});


export const { setPosts, getInwardPosts } = inwardSlice.actions;
export default inwardSlice.reducer;