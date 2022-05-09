import axios from "axios"
import { INSERT_INWARD_URL, INSERT_OUTWARD_URL, CONFIG, SELECT_INWARD_URL, DELETE_URL, SELECT_OUTWARD_URL, SELECT_DASHBOARD_INWARD_URL, SELECT_DASHBOARD_OUTWARD_URL } from "../../utility/Constants";
import store from "../../store";
import { connected, connectionError, initStore, setDashboardInward, setDashboardOutward, setInwardCount, setInwardTable, setOutwardCount, setOutwardTable } from "./postsSlice";


export const insertFrom = async ({
    inward = null,
    outward = null,

    nature = null,
    recievedFrom = null,
    subject = null,
    deliverTo = null,
    remark = null,

    serialNo = null,
    receiptNo = null,
    addresseeName = null,
    description = null,
    department = null }) => {

    console.log("post Action")

    let from_post = null;
    let body = null;

    if (inward) {
        console.log("insert inward");

        from_post = "inward_post";

        body = JSON.stringify({
            'from_post': from_post,
            'nature': nature,
            'recievedFrom': recievedFrom,
            'subject': subject,
            'deliverTo': deliverTo,
            'remark': remark
        });

        try {
            await axios.post(INSERT_INWARD_URL, body, CONFIG)
                .then((res) => {
                    if (res.data.insert == "successful") {
                        console.log("insert successful")
                        getDisplayData({ updated: true })
                        // Todo : alert model . 
                    }
                })
        } catch (err) {
            console.log(err);
        }
    }

    if (outward) {
        console.log("insert outward");

        from_post = "outward_post";

        body = JSON.stringify({
            'from_post': from_post,
            'serialNo': serialNo,
            'department': department,
            'receiptNo': receiptNo,
            'addresseeName': addresseeName,
            'nature': nature,
            'description': description,
            'remark': remark
        });

        try {
            await axios.post(INSERT_OUTWARD_URL, body, CONFIG)
                .then((res) => {
                    if (res.data.insert == "successful") {
                        console.log("insert successful")
                        getDisplayData({ updated: true })
                        // Todo : alert model . 
                    }
                })
        } catch (err) {
            console.log(err);
        }
    }
}


export const getDisplayData = async ({ updated = false }) => {

    if (sessionStorage.getItem('inwardTable') == undefined || updated) {

        console.log("sessionStorage undefined");

        try {
                // ------------ Dashboard Inward ------------
            await axios.post(SELECT_DASHBOARD_INWARD_URL, CONFIG)
                .then((res) => {
                    console.log(res.data);
                    sessionStorage.setItem('dashboardInward', JSON.stringify(res.data.dashboardInward));
                })
                .then(()=>store.dispatch(setDashboardInward()))

                // ------------ Dashboard Outward ------------
            await axios.post(SELECT_DASHBOARD_OUTWARD_URL, CONFIG)
                .then((res) => {
                    sessionStorage.setItem('dashboardOutward', JSON.stringify(res.data.dashboardOutward));
                    console.log(res.data);
                })
                .then(()=>store.dispatch(setDashboardOutward()))

                // ------------  Inward ------------
            await axios.post(SELECT_INWARD_URL, CONFIG)
                .then((res) => {
                    sessionStorage.setItem('inwardTable', JSON.stringify(res.data.inward));
                })
                .then(()=>store.dispatch(setInwardTable()))

                // ------------ Outward ------------
            await axios.post(SELECT_OUTWARD_URL, CONFIG)
                .then((res) => {
                    sessionStorage.setItem('outwardTable', JSON.stringify(res.data.outward));
                })
                .then(()=> store.dispatch(setOutwardTable()))

                // request inward & outward count  
            await axios.post('http://localhost:5000/status', CONFIG)
                .then((res) => {
                    // console.log(typeof(res.data.inward[0].inward_count));
                    let totalInward = res.data.inward[0].inward_count;
                    let totalOutward = res.data.outward[0].outward_count;
                    sessionStorage.setItem('inwardCount', totalInward);
                    sessionStorage.setItem('outwardCount', totalOutward);
                })
                .then(()=>store.dispatch(setInwardCount(), setOutwardCount()))

                store.dispatch(connected());

        }
        catch (err) {
            console.log(err);
            store.dispatch(connectionError());
            setTimeout(() => {
                getDisplayData({});
                console.log("hello");
            }, 6000);
        }
    }
}

const update_on = ({ inward = null, nature = null, recievedFrom = null, subject = null, deliverTo = null, outward = null, dept = null, addressee = null, desc = null, recipt_no = null }) => {
    const from_post = null;
    const body = null;

    if (inward) {
        from_post = "inward_post";

        body = JSON.stringify({
            'from_post': from_post,
            'nature': nature,
            'recievedFrom': recievedFrom,
            'subject': subject,
            'deliverTo': deliverTo
        });
    }

    if (outward) {
        from_post = "outward_post";

        body = JSON.stringify({
            'from_post': from_post,
            'dept': dept,
            'addressee': addressee,
            'desc': desc,
            'nature': nature,
            'recipt_no': recipt_no
        });
    }

    if (body)
        try {
            const res = axios.put(body, CONFIG);
            if (res.data.insert == "successful") {
                console.log("insert successful")
                // Todo : alert model . 
            }
        } catch (err) {
            console.log(err);
        }
}

export const delete_from = ({ inward = false, outward = false, rowID }) => {

    // only one of two options must be specified.

    if (inward && outward) {
        // alert function usage error
        return;
    }

    if(inward) {
        console.log(rowID)

        const body = JSON.stringify({
            from : 'inward',
            id: rowID
        });

        try {
            console.log(body);
            axios.post('http://localhost:5000/delete', body, CONFIG)
            .then((res)=>{
                console.log(res.data);
            })
            getDisplayData({updated:true});
            
            // delete successful alert msg.
        }
        catch (err) {
            console.log(err);
        }
    }

    if(outward) {

        const body = JSON.stringify({
            from : 'outward',
            id : rowID
        });

        try {
            console.log(body);
            axios.post('http://localhost:5000/delete', body, CONFIG)
            .then((res)=>{
                console.log(res.data);
            })

            getDisplayData({updated:true});
            // delete successful alert msg.
        }
        catch (err) {
            console.log(err);
        }
    }
    
       
}

