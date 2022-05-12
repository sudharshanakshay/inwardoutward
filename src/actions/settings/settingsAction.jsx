import axios from "axios"
import { CONFIG } from "../../utility/Constants"

export const addDepartment = (dept) => {
    const INSERT_DEPARTMENT_URL = 'http://localhost:5000/dept';

    const body = JSON.stringify(dept);

    try {
        axios.post(INSERT_DEPARTMENT_URL, body, CONFIG)
        .then((res)=>{
            if(res.data.status === 'success') {
                // ---- insert successful ----
                console.log('dept insert successful ');
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
        const dept = axios.post(GET_DEPT_URL, CONFIG)
        .then((res)=>{
            console.log(res.data.department);
            return res.data.department;
        })
        return dept;
    }
    catch (err) {
        console.log(err);
    }
    // ---- ToDo : handle error return here ----
}