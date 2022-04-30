import React from "react";
import axios from "axios"
import { INSERT_URL, CONFIG, DISPLAY_URL, DELETE_URL } from "../../utility/Values";

const insert_from = ({ inward = null, nature = null, recievedFrom = null, subject = null, deliverTo = null, outward = null, dept = null, addressee = null, desc = null, recipt_no = null }) => {

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
            const res = axios.post(INSERT_URL, body, CONFIG);
            if (res.data.insert == "successful") {
                console.log("insert successful")
                // Todo : alert model . 
            }
        } catch (err) {
            console.log(err);
        }
}


export const display_from = ({ inward, outward }) => {

    const rows = [];

    let from_post = null;

    if (inward) {
        from_post = "inward_post";
    }
    if (outward) {
        from_post = "outward_post";
    }

    const body = JSON.stringify({
        "from_post": from_post,
    });

    try {
        const res = axios.get(DISPLAY_URL, body, CONFIG);
        console.log(res);
        rows = res.data.rows;
    }
    catch (err) {
        console.log(err);
    }

    // return list of lists
    return rows;
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