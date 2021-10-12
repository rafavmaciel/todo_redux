const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "local_dev",
    password: "031993Ra",
    database: "todo_db",
  });

  db.connect()

module.exports = db 