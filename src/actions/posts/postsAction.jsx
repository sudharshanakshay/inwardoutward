import axios from "axios"
import { INSERT_INWARD_URL, INSERT_OUTWARD_URL, CONFIG, SELECT_INWARD_URL, SELECT_OUTWARD_URL, SELECT_DASHBOARD_INWARD_URL, SELECT_DASHBOARD_OUTWARD_URL, SUCCESS } from "../../utils/Constants";
import store from "../../store";
import { connected, connectionError, setDashboardInward, setDashboardOutward, setInwardCount, setInwardTable, setOutwardCount, setOutwardTable, setRowData } from "./postsSlice";

// ----------------- Insert handler -----------------

export const insertFrom = async ({
    inward = null,
    outward = null,

    date = null,

    inwardNo = null,
    nature = null,
    recievedFrom = null,
    subject = null,
    deliverTo = null,
    remark = null,

    serialNo = null,
    receiptNo = null,
    addressee = null,
    description = null,
    department = null }) => {

    console.debug("post Action")

    let from_post = null;
    let body = null;

    if (inward) {
        console.debug("insert inward");

        from_post = "inward_post";

        body = JSON.stringify({
            inwardNo: inwardNo,
            date: date,
            from_post: from_post,
            nature: nature,
            recievedFrom: recievedFrom,
            subject: subject,
            deliverTo: deliverTo,
            remark: remark
        });

        try {
            await axios.post(INSERT_INWARD_URL, body, CONFIG)
                .then((res) => {
                    console.debug(res.data)
                    if (res.data.status === SUCCESS) {
                        console.debug("insert successful")
                        getDisplayData({ updated: true })
                        // Todo : alert model . 
                    }
                })
        } catch (err) {
            console.debug(err);
        }
    }

    if (outward) {
        console.debug("insert outward");

        from_post = "outward_post";

        body = JSON.stringify({
            from_post: from_post,
            date: date,
            serialNo: serialNo,
            department: department,
            receiptNo: receiptNo,
            addressee: addressee,
            nature: nature,
            description: description,
            remark: remark
        });

        try {
            await axios.post(INSERT_OUTWARD_URL, body, CONFIG)
                .then((res) => {
                    console.debug(res);
                    if (res.data.status === SUCCESS) {
                        console.debug("insert successful")
                        getDisplayData({ updated: true })
                        // Todo : alert model . 
                    }
                })
        } catch (err) {
            console.debug("err outward insert ");
            console.debug(err);
        }
    }
}

// ----------------- Retrive inward, outward table data  -----------------

export const getDisplayData = async ({ updated = false }) => {

    if (sessionStorage.getItem('inwardTable') == undefined || updated) {

        // console.debug("sessionStorage undefined");

        try {
            // ------------ Dashboard Inward ------------
            await axios.post(SELECT_DASHBOARD_INWARD_URL, CONFIG)
                .then((res) => {
                    console.debug(res.data);
                    sessionStorage.setItem('dashboardInward', JSON.stringify(res.data.dashboardInward));
                })
                .then(() => store.dispatch(setDashboardInward()))

            // ------------ Dashboard Outward ------------
            await axios.post(SELECT_DASHBOARD_OUTWARD_URL, CONFIG)
                .then((res) => {
                    sessionStorage.setItem('dashboardOutward', JSON.stringify(res.data.dashboardOutward));
                    console.debug(res.data);
                })
                .then(() => store.dispatch(setDashboardOutward()))

            // ------------  Inward ------------
            await axios.post(SELECT_INWARD_URL, CONFIG)
                .then((res) => {
                    sessionStorage.setItem('inwardTable', JSON.stringify(res.data.inward));
                })
                .then(() => store.dispatch(setInwardTable()))

            // ------------ Outward ------------
            await axios.post(SELECT_OUTWARD_URL, CONFIG)
                .then((res) => {
                    sessionStorage.setItem('outwardTable', JSON.stringify(res.data.outward));
                })
                .then(() => store.dispatch(setOutwardTable()))

            // request inward & outward count  
            await axios.post('http://localhost:5000/status', CONFIG)
                .then((res) => {
                    // console.debug(typeof(res.data.inward[0].inward_count));
                    sessionStorage.setItem('inwardCount', res.data.inward[0].inward_count);
                    sessionStorage.setItem('outwardCount', res.data.outward[0].outward_count);
                })
                .then(() => store.dispatch(setOutwardCount()))
                .then(() => store.dispatch(setInwardCount()));

            store.dispatch(connected());

        }
        catch (err) {
            console.debug(err);
            store.dispatch(connectionError());
            setTimeout(() => {
                getDisplayData({});
                console.debug("hello");
            }, 6000);
        }
    }
}

// ----------------- Retrive specific row handler -----------------

export const getRow = ({ id, inward = false, outward = false }) => {

    console.log(id);

    // ----------------- get Inward row -----------------
    if (inward) {
        const body = JSON.stringify({
            from_post: 'inward',
            id : id
        })
        try {
            const row = axios.post('http://localhost:5000/select/row', body, CONFIG)
                .then((res) => {
                    // console.debug(res.data.selectRow);
                    console.debug('single row retrived successful')
                    // sessionStorage.setItem('selectRow', JSON.stringify({rowData : res.data.selectRow }));
                    // Next()
                    return res.data.selectRow;
                })
                // .then((res) => {
                    // console.debug(res.data);
                    // store.dispatch(setRowData());
                    // return res.data.selectRow;
                // } );
            return row;
        }
        catch (err) {
            console.debug(err);
            return 'error';
        }
    }

    // ----------------- get Outward row -----------------

    if (outward) {
        const body = JSON.stringify({
            from_post: 'outward',
            id: id
        })

        try {
            const row = axios.post('http://localhost:5000/select/row', body, CONFIG)
                .then((res) => {
                    console.debug(res.data.selectRow);
                    console.debug('retrive successful')
                    return res.data.selectRow;
                })
            return row;
        }
        catch (err) {
            console.debug(err);
            return 'error'
        }
    }
}


// ----------------- Update Row handler -----------------

export const updateTo = async ( props
    // {

    // inward = null,
    // outward = null,

    // id = null,

    // date = null,

    // inwardNo = null,
    // nature = null,
    // recievedFrom = null,
    // subject = null,
    // deliverTo = null,
    // remark = null,
    // isEmailSent = 0,

    // serialNo = null,
    // receiptNo = null,
    // addressee = null,
    // description = null,
    // department = null }
    
    ) => {

    // ----------------- update Inward row -----------------

    if (props.inward) {
        const from_post = "inward_post";
        console.log(props.inwardID);

        const body = JSON.stringify({
            inwardID: props.inwardID,
            inwardNo: props.inwardNo,
            date: props.date,
            from_post: props.from_post,
            nature: props.nature,
            recievedFrom: props.recievedFrom,
            subject: props.subject,
            deliverTo: props.deliverTo,
            remark: props.remark,
            isEmailSent : props.isEmailSent
        });

        try {
            await axios.post('http://localhost:5000/inward/update', body, CONFIG)
                .then((res) => {
                    console.debug(res.data);
                    if (res.data.status === SUCCESS) getDisplayData({ updated: true });
                })
        }
        catch (err) {
            console.debug(err);
        }
    }

    // ----------------- update Outward row -----------------

    if (props.outward) {
        console.debug('outward update')
        console.debug(props.id)

        const from_post = "outward_post";

        const body = JSON.stringify({
            outwardID: props.id,
            from_post: props.from_post,
            date: props.date,
            serialNo: props.serialNo,
            department: props.department,
            receiptNo: props.receiptNo,
            addressee: props.addressee,
            nature: props.nature,
            description: props.description,
            remark: props.remark
        });

        try {
            await axios.post('http://localhost:5000/outward/update', body, CONFIG)
                .then((res) => {
                    console.debug(res.data.outwardUpdate);
                    console.debug('outward update success');
                    if (res.data.status === SUCCESS) getDisplayData({ updated: true });
                })
        }
        catch (err) {
            console.debug('outward update error')
            console.debug(err);
        }
    }
}

// ----------------- delete handler -----------------

export const delete_from = async ({ rowID, inward = false, outward = false }) => {

    // only one of two options must be specified.

    if (inward && outward) {
        // alert function usage error
        return;
    }

    // ----------------- delete inward -----------------

    if (inward) {
        console.debug(rowID)

        const body = JSON.stringify({
            from: 'inward',
            id: rowID
        });

        try {
            console.debug(body);
            await axios.post('http://localhost:5000/delete', body, CONFIG)
                .then((res) => {
                    console.debug(res.data);
                    if (res.data.status === SUCCESS) {
                        console.log('hy im delete in inward !');
                        getDisplayData({ updated: true });
                    }
                })


            // delete successful alert msg.
        }
        catch (err) {
            console.debug(err);
        }
    }

    // ----------------- delete outward -----------------

    if (outward) {

        const body = JSON.stringify({
            from: 'outward',
            id: rowID
        });

        try {
            console.debug(body);
            await axios.post('http://localhost:5000/delete', body, CONFIG)
                .then((res) => {
                    console.debug(res.data);
                    if (res.data.status === SUCCESS) getDisplayData({ updated: true });
                })

            // delete successful alert msg.
        }
        catch (err) {
            console.debug(err);
        }
    }

}