import React, { useEffect } from "react";
import axios from "axios"
import { INSERT_INWARD_URL, INSERT_OUTWARD_URL, CONFIG, SELECT_INWARD_URL, DELETE_URL, SELECT_OUTWARD_URL, SELECT_DASHBOARD_INWARD_URL, SELECT_DASHBOARD_OUTWARD_URL } from "../../utility/Constants";
import store from "../../store";
import { connected, connectionError, setDashboardInward, setDashboardOutward, setInwardCount, setInwardTable, setOutwardTable } from "./postsSlice";


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
                    store.dispatch(setDashboardInward(res.data));
                })

                // ------------ Dashboard Outward ------------
            await axios.post(SELECT_DASHBOARD_OUTWARD_URL, CONFIG)
                .then((res) => {
                    sessionStorage.setItem('dashboardOutward', JSON.stringify(res.data.dashboardOutward));
                    console.log(res.data);
                    store.dispatch(setDashboardOutward(res.data));
                })

                // ------------  Inward ------------
            await axios.post(SELECT_INWARD_URL, CONFIG)
                .then((res) => {
                    sessionStorage.setItem('inwardTable', JSON.stringify(res.data.inward));
                    console.log(res.data);
                    store.dispatch(setInwardTable(res.data));
                })

                // ------------ Outward ------------
            await axios.post(SELECT_OUTWARD_URL, CONFIG)
                .then((res) => {
                    sessionStorage.setItem('outwardTable', JSON.stringify(res.data.outward));
                    store.dispatch(setOutwardTable(res.data));
                    // console.log(res.data);
                })

                // request inward & outward count  
            await axios.post('http://localhost:5000/status', CONFIG)
                .then((res) => {
                    // console.log(typeof(res.data.inward[0].inward_count));
                    let totalInward = res.data.inward[0].inward_count;
                    let totalOutward = res.data.outward[0].outward_count;
                    sessionStorage.setItem('inwardCount', totalInward);
                    store.dispatch(setInwardCount(totalInward));
                    sessionStorage.setItem('outwardCount', totalOutward);
                    store.dispatch(setOutwardTable(totalOutward));
                    // sessionStorage.setItem('pendingCount', totalInward-totalOutward);
                    // setReRender(true);
                })

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

const delete_from = ({ inward_no = null, outward_no = null }) => {

    // only one of two options must be specified.

    if (inward_no && outward_no) {
        // alert function usage error
        return;
    }

    const from_post = null;
    const post_id = null;

    if (inward_no) {
        from_post = "inward_post";
        post_id = inward_no;
    }
    if (outward_no) {
        from_post = "outward_post";
        post_id = outward_no;
    }

    const body = JSON.stringify({
        "from_post": from_post,
        "post_id": post_id
    });

    if (body)
        try {
            const res = axios.delete(DELETE_URL, body, CONFIG);
            // delete successful alert msg.
        }
        catch (err) {
            console.log(err);
        }
}

// export default {insert_from, display_from, update_on, delete_from};