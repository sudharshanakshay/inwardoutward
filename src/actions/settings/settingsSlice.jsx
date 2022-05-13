import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name:'settings',
    initialState : {
        departmentList : [],
    },
    reducers : {
        setDepartmentList : (state) => {
            state.departmentList = JSON.parse(sessionStorage.getItem('departmentList'));
        },
    }
});

export default settingsSlice.reducer;
export const { setDepartmentList } = settingsSlice.actions;