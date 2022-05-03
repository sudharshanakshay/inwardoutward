import React, { useEffect } from "react";
import axios from "axios"
import { INSERT_INWARD_URL, INSERT_OUTWARD_URL, CONFIG, SELECT_INWARD_URL, DELETE_URL } from "../../utility/Values";
import store from "../../store";
import getInwardPosts from "./postsSlice";

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
    description = null }) => {

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
                        getDisplayData({updated:true, inward:true})
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
                        getDisplayData({updated:true, outward:true})
                        // Todo : alert model . 
                    }
                })
        } catch (err) {
            console.log(err);
        }
    }
}


export const getDisplayData = async ({ setRen, inward = false, outward = false, updated =false }) => {

    // if (sessionStorage.getItem('inwardTable') == undefined || updated) {
        const body = JSON.stringify({
            'inward': inward,
            'outward': outward
        });

        if (inward) {
            try {
                console.log("inward "+body);
                await axios.post(SELECT_INWARD_URL, body, CONFIG)
                    .then((res) => {

                        sessionStorage.setItem('inwardTable', JSON.stringify(res.data.inward));
                        setRen(true);
                    })
            }
            catch (err) {
                console.log(err);
            }
        }

        if (outward) {
            try {
                console.log("outward "+body);
                await axios.post(INSERT_OUTWARD_URL, body, CONFIG)
                    .then((res) => {
                        sessionStorage.setItem('outwardTable', JSON.stringify(res.data.outward));
                        setRen(true);
                        console.log(res.data);
                    })
            }
            catch (err) {
                console.log(err);
            }
        }
    // }

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