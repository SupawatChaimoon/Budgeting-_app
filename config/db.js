const mysql = require('mysql2/promise')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Zx121214',
    database:'budgeting_db' 
})

module.exports = db