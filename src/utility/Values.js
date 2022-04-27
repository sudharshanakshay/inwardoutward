export const LOGIN_URL = "http://localhost:5000/cors/login";

export const REGISTER_URL = "http://localhost:5000/cors/register";

export const CONFIG = {
    headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'OPTIONS,POST,GET',
        'Content-Type': 'application/json'
      }
}

export const INWARD_TABLE_TITLE = "Inward Table";

export const OUTWARD_TABLE_TITLE = "Outward Table";

export const TABLEHEADER_LONG = ["sl. no", "Date", "Inward No", "Nature of Mail", "Recieved From", "Subject", "Deliver To", "Remark"];

export const TABLEHEADER_SMALL = ["Date", "Inward No", /*"Nature of Mail"*/, "Recieved From", "Subject", "Deliver To"];


export const TEST_TABLEDATA_LONG = [[1, "21/04/2022", "in005", "Invitation", "NITK", "Meeting", "Principal", "NA"],["2", "20/04/2022","in006", "Updates", "Higher Authority", "Examination", "Students", "NA"]];

export const TEST_TABLEDATA_SMALL = [["21/04/2022", "in005",  "NITK", "Meeting", "Principal"],["20/04/2022","in006",  "Higher Authority", "Examination", "Students"]];

