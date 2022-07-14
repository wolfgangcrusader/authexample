const mysql2 = require('mysql2');
const dotenv = require('dotenv').config();

const db = mysql2.createPool({
    host: "sg1-ts6.a2hosting.com",
    user: "missio20_team6",
    password: "FC.xvbbC!S39",
    database: "missio20_team5",
    connectTimeout: 30000
})

module.exports = db;