// const express = require("express");
// const app = express();

// const mysql = require("mysql");

// const DB_HOST = process.env.DB_HOST
// const DB_USER = process.env.DB_USER
// const DB_PASSWORD = process.env.DB_PASSWORD
// const DB_DATABASE = process.env.DB_DATABASE
// const DB_PORT = process.env.DB_PORT
// const port = process.env.PORT

// const conn = mysql.createPool({
//     connectionLimit: 100,
//     host: DB_HOST,
//     user: DB_USER,
//     Password: DB_PASSWORD,
//     database: DB_DATABASE,
//     port: DB_PORT
// });

// conn.getConnection((err, connection)=> {
//     if(err) throw (err);
//     console.log("DB connected successful "+connection.threadId);

// });

// const cors = require("cors");

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     Credential:true,
//     optionSuccessStatus: 200
// }

// app.use(cors(corsOptions));
