import axios from "axios"
import store from "../../store";
import { CONFIG, ERROR } from "../../utils/Constants"
import { setDepartmentList, setEmployeeData } from "./settingsSlice";
import { SUCCESS } from "../../utils/Constants";

// ----------------- settings Actions handles data manuplation for settings page -----------------

// ----------------- Retrive department -----------------

export const getDepartment = async ({ updated = false }) => {
    const GET_DEPT_URL = 'http://localhost:5000/select/dept';

    if(sessionStorage.getItem('departmentList') == undefined || updated){
        try {
            await axios.post(GET_DEPT_URL, CONFIG)
                .then((res) => {
                    console.debug(res.data.departmentList);

                    if(!(res.data.departmentList == ERROR)) sessionStorage.setItem('departmentList', JSON.stringify(res.data.departmentList));
                    // return res.data.departmentList;
                })
                .then(() => store.dispatch(setDepartmentList()))
            // return dept;
        }
        catch (err) {
            console.debug(err);
        }
        // ---- ToDo : handle error return here ----
    }
}

// ----------------- insert department -----------------
export const addDepartment = async (dept) => {

    const INSERT_DEPARTMENT_URL = 'http://localhost:5000/dept';

    const body = JSON.stringify(dept);

    console.debug(body);

    try {
        await axios.post(INSERT_DEPARTMENT_URL, body, CONFIG)
            .then((res) => {
                if (res.data.status === SUCCESS) {
                    // ---- insert successful ----
                    console.debug('dept insert successful ');
                    getDepartment({ updated:true });
                }
                else {
                    console.debug(res.data);
                }
            })

    }
    catch (err) {
        console.debug(err)
    }
}

// ----------------- delete department -----------------

export const delDepartment = async ({rowID}) => {

    const body = JSON.stringify({
        from: 'department',
        id: rowID
    })

    console.debug(rowID);

    try {
        await axios.post('http://localhost:5000/delete', body, CONFIG)
            .then((res) => {
                console.debug(res.data.status)
                if (res.data.status === SUCCESS) getDepartment({ updated:true });
            })
    }
    catch (err) {
        console.debug(err);
    }
}

// ----------------- Retrive Employee data -----------------

export const getEmployeeData = async({ updated = false }) => {

    const GET_EMP_URL = 'http://localhost:5000/select/emp';
    if(sessionStorage.getItem('employeeData') ==     undefined || updated){
        try {
            await axios.post(GET_EMP_URL, CONFIG)
                .then((res) => {
                    console.debug(res.data.employeeData);
                    if (res.data.employeeData !== 'error') sessionStorage.setItem('employeeData', JSON.stringify(res.data.employeeData));
                })
                .then(() => store.dispatch(setEmployeeData()));
        }
        catch (err) {
            console.debug(err)
        }
    }
}

// ----------------- insert employee data -----------------

export const addEmployee = async (employeeData) => {
    const ADD_EMP_URL = 'http://localhost:5000/insert/emp';
    try {
        const body = JSON.stringify(employeeData);

        await axios.post(ADD_EMP_URL, body, CONFIG)
            .then((res) => {
                console.debug(res.data.status);
                if (res.data.status === SUCCESS) getEmployeeData({ updated:true });
            })
    } catch (error) {
        console.debug(error)
    }
}


// ----------------- delete Employee data -----------------

export const delEmployee = async ({ rowID }) => {
    const DELETE_URL = 'http://localhost:5000/delete';

    const body = JSON.stringify({
        from: 'employee',
        id: rowID
    })

    try {
        await axios.post(DELETE_URL, body, CONFIG)
            .then((res) => {
                console.debug(res.data.status);
                if (res.data.status === SUCCESS) getEmployeeData({ updated:true });
            })
    }
    catch (err) {
        console.debug(err)
    }
}