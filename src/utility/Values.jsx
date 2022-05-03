// ------------------------------ URLs ------------------------------

const BASE_URL = "http://localhost:5000"

export const LOGIN_URL = BASE_URL+ "/cors/login";

export const REGISTER_URL = BASE_URL+ "/cors/register";

export const INSERT_INWARD_URL = BASE_URL+ "/inward/insert";

export const INSERT_OUTWARD_URL = BASE_URL+ "/outward/insert";

export const UPDATE_URL = BASE_URL+ "/data";

export const DELETE_URL = BASE_URL+ "/data";

export const SELECT_INWARD_URL = BASE_URL + "/inward/select" ;

export const SELECT_OUTWARD_URL = BASE_URL + "/outward/select" ;


// ------------------------------ Configuration data ------------------------------

export const CONFIG = {
    headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        'Content-Type': 'application/json'
      }
}


// ------------------------------ constants & test data ------------------------------

export const INWARD_TABLE_TITLE = "Inward Table";

export const OUTWARD_TABLE_TITLE = "Outward Table";

export const OUTWARD_TABLE_HEADER = ["sl.no", "Serial No.", "Receipt No.", "Addressee Name", "Nature", "Description", "Remark"];

export const TABLEHEADER_LONG = ["sl. no", "Date", "Inward No", "Nature of Mail", "Recieved From", "Subject", "Deliver To", "Remark"];

export const TABLEHEADER_SMALL = ["Date", "Inward No", /*"Nature of Mail"*/, "Recieved From", "Subject", "Deliver To"];

export const TEST_TABLEDATA_LONG = [[1, "21/04/2022", "in005", "Invitation", "NITK", "Meeting", "Principal", "NA"],["2", "20/04/2022","in006", "Updates", "Higher Authority", "Examination", "Students", "NA"]];

export const TEST_TABLEDATA_SMALL = [["21/04/2022", "in005",  "NITK", "Meeting", "Principal"],["20/04/2022","in006",  "Higher Authority", "Examination", "Students"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"]];

