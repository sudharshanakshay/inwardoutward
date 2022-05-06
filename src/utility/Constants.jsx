// ------------------------------ URLs ------------------------------

const BASE_URL = "http://localhost:5000"

export const LOGIN_URL = BASE_URL+ "/login";

export const REGISTER_URL = BASE_URL+ "/register";

export const INSERT_INWARD_URL = BASE_URL+ "/inward/insert";

export const INSERT_OUTWARD_URL = BASE_URL+ "/outward/insert";

export const UPDATE_URL = BASE_URL+ "/data";

export const DELETE_URL = BASE_URL+ "/data";

export const SELECT_INWARD_URL = BASE_URL + "/inward/select" ;

export const SELECT_OUTWARD_URL = BASE_URL + "/outward/select" ;

export const SELECT_DASHBOARD_INWARD_URL = BASE_URL+"/dashboard/inward";

export const SELECT_DASHBOARD_OUTWARD_URL = BASE_URL+"/dashboard/outward";

// ------------------------------ Configuration data ------------------------------

export const CONFIG = {
    headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        'Content-Type': 'application/json'
      }
}

// ----------------------------------- SQL queries ----------------------------------




// ------------------------------ constants & test data ------------------------------

export const INWARD_TABLE_TITLE = "Inward Table";

export const OUTWARD_TABLE_TITLE = "Outward Table";

export const OUTWARD_TABLE_HEADER = ["sl.no","Date",  "Serial No.","Department", "Addressee Name", "Nature", "Description", "Receipt No.", "Remark"];

export const OUTWARD_TABLE_HEADER_SHORT = [ "Date",  "Department", "Addressee"];

export const INWARD_TABLE_HEADER = ["sl. no", "Date", "Inward No", "Nature of Mail", "Recieved From", "Subject", "Deliver To", "Remark"];

export const INWARD_TABLE_HEADER_SHORT = [ "Date", "Recieved From", "Deliver To" /*,"Subject"*/];

export const TEST_TABLEDATA_LONG = [[1, "21/04/2022", "in005", "Invitation", "NITK", "Meeting", "Principal", "NA"],["2", "20/04/2022","in006", "Updates", "Higher Authority", "Examination", "Students", "NA"]];

export const TEST_TABLEDATA_SMALL = [["21/04/2022", "in005",  "NITK", "Meeting", "Principal"],["20/04/2022","in006",  "Higher Authority", "Examination", "Students"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"]];
