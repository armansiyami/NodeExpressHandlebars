var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 8000;

var server = express();


server.use(express.static("public"));

server.use(bodyParser.urlencoded({ extended: false }));


var exphbs = require("express-handlebars");

server.engine("handlebars", exphbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");

server.use("/", routes);

server.listen(port, function() {
    console.log("App is running on port " + port);
});

