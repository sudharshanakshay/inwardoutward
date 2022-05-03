import React, { useEffect } from "react";
import axios from "axios"
import { INSERT_URL, CONFIG, DELETE_URL, INWARD_URL, OUTWARD_URL } from "../../utility/Values";
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
     
    dept = null, 
    addressee = null, 
    desc = null, 
    recipt_no = null }) => {

        console.log("post Action")

    let from_post = null;
    let body = null;

    if (inward) {
        from_post = "inward_post";

        body = JSON.stringify({
            'from_post': from_post,
            'nature': nature,
            'recievedFrom': recievedFrom,
            'subject': subject,
            'deliverTo': deliverTo,
            'remark' : remark
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
            await axios.post(INSERT_URL, body, CONFIG)
            .then((res)=>{
                if (res.data.insert == "successful") {
                    console.log("insert successful")
                    // Todo : alert model . 
                }
            })
        } catch (err) {
            console.log(err);
        }
}


export const getDisplayData = async ({ inward = false, outward = false, setRen }) => {

    if (sessionStorage.getItem('inwardTable') == undefined) {
        const body = JSON.stringify({
            'inward': inward,
            'outward': outward
        });

        if (inward) {
            try {
                console.log(body);
                await axios.post(INWARD_URL , body, CONFIG)
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
                console.log(body);
                await axios.post(OUTWARD_URL, body, CONFIG)
                    .then((res) => {
                        sessionStorage.setItem('outwardTable', JSON.stringify(res.data.outward));
                        setRen(true);
                    })
            }
            catch (err) {
                console.log(err);
            }
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
            const res = axios.put(INSERT_URL, body, CONFIG);
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