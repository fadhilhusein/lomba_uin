const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12797040",
    password: "sh4zQJl3vb",
    database: "sql12797040"
})

db.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log("Database berhasil terkoneksi!!!")
})

module.exports = db;
