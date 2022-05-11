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
        inwardViewRow:{},
        connectionError: false
    },
    reducers: {
        connectionError : (state) => {
            state.connectionError = true;
        },

        connected : (state) => {
            state.connectionError = false;
        },

        // initStore : (state) => {
        //     state.inwardTable = JSON.parse(sessionStorage.getItem('inwardTable'));
        //     state.outwardTable = JSON.parse(sessionStorage.getItem('outwardTable'));
        //     state.dashboardInward = JSON.parse(sessionStorage.getItem('dashboardInward'));
        //     state.dashboardOutward = JSON.parse(sessionStorage.getItem('dashboardOutward'));
        //     state.inwardCount = JSON.parse(sessionStorage.getItem('inwardCount'));
        //     state.outwardCount = JSON.parse(sessionStorage.getItem('outwardCount'));
        // },

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

        setViewRow : (state) =>{
            state.viewRow = JSON.parse(sessionStorage.getItem('viewRow'));
        },

        setInwardViewRow : (state, id) => {
            state.inwardTable.forEach(element => {
                if(element.inwardID === id){
                    console.log(element)
                    state.inwardViewRow = element;
                }
            });
        }
    }
});


export const { setViewRow, setInwardViewRow, connected, connectionError, setInwardTable, setOutwardTable, setDashboardInward, setDashboardOutward, setInwardCount, setOutwardCount } = postsSlice.actions;
export default postsSlice.reducer;