import axios from "axios"
import store from "../../store";
import { CONFIG } from "../../utility/Constants"
import { setDepartmentList, setEmployeeData } from "./settingsSlice";

export const addDepartment = async (dept) => {
    const INSERT_DEPARTMENT_URL = 'http://localhost:5000/dept';

    const body = JSON.stringify(dept);

    console.log(body);

    try {
        await axios.post(INSERT_DEPARTMENT_URL, body, CONFIG)
        .then((res)=>{
            if(res.data.status === 'success') {
                // ---- insert successful ----
                console.log('dept insert successful ');
                getAllDepartment();
            }
            else {
                console.log(res.data);
            }
        })
        
    }
    catch (err){
        console.log(err)
    }
}

export const getAllDepartment = async () => {
    const GET_DEPT_URL = 'http://localhost:5000/select/dept';
    try {
        await axios.post(GET_DEPT_URL, CONFIG)
        .then((res)=>{
            console.log(res.data.departmentList);
            sessionStorage.setItem('departmentList', JSON.stringify(res.data.departmentList));
            // return res.data.departmentList;
        })
        .then(()=>store.dispatch(setDepartmentList()))
        // return dept;
    }
    catch (err) {
        console.log(err);
    }
    // ---- ToDo : handle error return here ----
}

export const addEmployee = async (employeeData) => {
    const ADD_EMP_URL = 'http://localhost:5000/insert/emp';
    try {
        const body = JSON.stringify(employeeData);

        await axios.post(ADD_EMP_URL, body, CONFIG)
        .then((res) => {
            console.log(res.data.status);
            if(res.data.status === 'sucess') getEmployeeData();
        })
    } catch (error) {
        console.log(error)
    }
}

export const getEmployeeData = () => {
    
    const GET_EMP_URL = 'http://localhost:5000/select/emp';
    try {
        axios.post(GET_EMP_URL, CONFIG)
        .then((res)=>{
            console.log(res.data.employeeData);
            if(res.data.employeeData !== 'error' )sessionStorage.setItem('employeeData', JSON.stringify(res.data.employeeData));
        })
        .then(()=>store.dispatch(setEmployeeData()));
    }
    catch (err) {
        console.log(err)
    }
}