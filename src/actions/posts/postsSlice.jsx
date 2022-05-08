import { createSlice } from "@reduxjs/toolkit"

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        inwardTable: [],
        outwardTable:[],
        dashboardInward:[],
        dashboardOutward:[],
        inwardCount: '',
        outwardCount: '',
        connectionError: false
    },
    reducers: {
        connectionError : (state) => {
            state.connectionError = true;
            // setTimeout(()=>{state.connectionError = false},6)
        },

        connected : (state) => {
            state.connectionError = false;
        },

        setInwardTable: (state, rows) => {
            state.inwardTable = rows;
        },

        setOutwardTable: (state, rows) =>{
            state.outwardTable = rows;
        },

        setDashboardInward: (state, rows) => {
            state.dashboardInward = rows
        },

        setDashboardOutward: (state, rows) => {
            state.dashboardOutward = rows
        },

        setInwardCount : (state, count) => {
            state.inwardCount = count
        },

        setOutwardCount : (state, count) => {
            state.outwardCount = count
        }
    }
});


export const { connected, connectionError, setInwardTable, setOutwardTable, setDashboardInward, setDashboardOutward, setInwardCount, setOutwardCount } = postsSlice.actions;
export default postsSlice.reducer;