import { createSlice } from "@reduxjs/toolkit"

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        inwardTable: [],
        outwardTable:[],
        dashboardInward:[],
        dashboardOutward:[],
        inwardCount: 0,
        outwardCount: 0,
        rowData: [],
        connectionError: false
    },
    reducers: {
        connectionError : (state) => {
            state.connectionError = true;
        },

        connected : (state) => {
            state.connectionError = false;
        },

        setInwardTable: (state) => {
            state.inwardTable = JSON.parse(sessionStorage.getItem('inwardTable'));
        },

        setOutwardTable: (state) =>{
            state.outwardTable = JSON.parse(sessionStorage.getItem('outwardTable'));
        },

        setDashboardInward: (state) => {
            state.dashboardInward = JSON.parse(sessionStorage.getItem('dashboardInward'));
        },

        setDashboardOutward: (state) => {
            state.dashboardOutward = JSON.parse(sessionStorage.getItem('dashboardOutward'));
        },

        setInwardCount : (state) => {
            state.inwardCount = JSON.parse(sessionStorage.getItem('inwardCount'));
        },

        setOutwardCount : (state) => {
            state.outwardCount = JSON.parse(sessionStorage.getItem('outwardCount'));
        },

        setRowData : (state) =>{
            state.rowData = JSON.parse(sessionStorage.getItem('rowData'));
        }
    }
});


export const { setRowData, setInwardViewRow, connected, connectionError, setInwardTable, setOutwardTable, setDashboardInward, setDashboardOutward, setInwardCount, setOutwardCount } = postsSlice.actions;
export default postsSlice.reducer;