
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "us-cdbr-iron-east-02.cleardb.net",
        port: 3306,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DB
    });
}


connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;

