import axios from "axios"
import store from "../../store";
import { CONFIG } from "../../utility/Constants"
import { setDepartmentList } from "./settingsSlice";

export const addDepartment = async (dept) => {
    const INSERT_DEPARTMENT_URL = 'http://localhost:5000/dept';

    const body = JSON.stringify(dept);

    try {
        await axios.post(INSERT_DEPARTMENT_URL, body, CONFIG)
        .then((res)=>{
            if(res.data.status === 'success') {
                // ---- insert successful ----
                console.log('dept insert successful ');
                getAllDepartment();
            }
        })
        
    }
    catch (err){
        console.log(err)
    }
}

export const getAllDepartment = () => {
    const GET_DEPT_URL = 'http://localhost:5000/select/dept';
    try {
        axios.post(GET_DEPT_URL, CONFIG)
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