
var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "us-cdbr-iron-east-02.cleardb.net",
        port: 3306,
        user: "b382d114ef5a4f",
        password: ":fa914d4f",
        database: "heroku_39d27468fcc44fc"
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

