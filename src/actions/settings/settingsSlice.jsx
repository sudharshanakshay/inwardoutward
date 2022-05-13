import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name:'settings',
    initialState : {
        departmentList : [],
        employeeData : []
    },
    reducers : {
        setDepartmentList : (state) => {
            state.departmentList = JSON.parse(sessionStorage.getItem('departmentList'));
        },

        setEmployeeData : (state) => {
            state.employeeData = JSON.parse(sessionStorage.getItem('employeeData'));
        }
    }
});

export default settingsSlice.reducer;
export const { setDepartmentList, setEmployeeData } = settingsSlice.actions;