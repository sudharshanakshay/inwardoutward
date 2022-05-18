// ------------------------------ URLs ------------------------------

const BASE_URL = "http://localhost:5000"

export const LOGIN_URL = BASE_URL+ "/login";

export const REGISTER_URL = BASE_URL+ "/register";

export const INSERT_INWARD_URL = BASE_URL+ "/inward/insert";

export const INSERT_OUTWARD_URL = BASE_URL+ "/outward/insert";

export const UPDATE_INWARD_URL = BASE_URL+ "/inward/update";

export const DELETE_URL = BASE_URL+ "/delete";

export const SELECT_INWARD_URL = BASE_URL + "/inward/select" ;

export const SELECT_OUTWARD_URL = BASE_URL + "/outward/select" ;

export const SELECT_DASHBOARD_INWARD_URL = BASE_URL+"/dashboard/inward";

export const SELECT_DASHBOARD_OUTWARD_URL = BASE_URL+"/dashboard/outward";

// ------------------------------ Default message ------------------------------

export const BODY = 'body';

export const SUBJECT = 'subject'; 


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

export const LOGOUT = 'logout';

export const DELETE = 'delete';

export const SUCCESS = 'success';

export const TOTAL_OUTWARD_POST = 'Total Outward Post';

export const TOTAL_INWARD_POST = 'Total Inward Post';

export const TOTAL_POST = 'Total Post';

export const INWARD_TABLE_TITLE = "Inward Table";

export const OUTWARD_TABLE_TITLE = "Outward Table";

export const INWARD_TABLE_HEADER = [["sl. no", "4%"], ["Date", "10%"], ["Inward No", "10%"], ["Nature", "10%"], ["Recieved From", "12%"], ["Subject", "10%"], ["Deliver To", "10%"], ["Remark", "10%"]];

export const INWARD_TABLE_HEADER_SHORT = [ ["Date", "33.33%"], ["From", "33.33%"], ["Deliver To", "33.33%"] /*,"Subject"*/];

export const OUTWARD_TABLE_HEADER = [["sl.no", "1%"], ["Date","10%"],  ["Serial No.", "10%"],["From Department", "8%"], ["Addressee", "10%"], ["Nature", "10%"], ["Description", "10%"], ["Receipt No.", "12%"], ["Remark", "6%"]];

export const OUTWARD_TABLE_HEADER_SHORT = [ ["Date", "33.33%"],  ["Department", "33.33%"], ["Addressee", "33.33%"]];

export const TEST_TABLEDATA_LONG = [[1, "21/04/2022", "in005", "Invitation", "NITK", "Meeting", "Principal", "NA"],["2", "20/04/2022","in006", "Updates", "Higher Authority", "Examination", "Students", "NA"]];

export const TEST_TABLEDATA_SMALL = [["21/04/2022", "in005",  "NITK", "Meeting", "Principal"],["20/04/2022","in006",  "Higher Authority", "Examination", "Students"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"], ["21/04/2022", "in005",  "NITK", "Meeting", "Principal"]];

