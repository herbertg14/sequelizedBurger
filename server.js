express = require ("express");
methodOverride = require("method-override");
bodyParser = require("body-parser");

//add character model and sync it 
var Burger = require("./models")["Burgers"];

//creating the burger table. 
Burger.sync();

var app = express();

// check if this is right
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({
	extended:false
}));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/",routes);

var PORT = process.env.PORT || 5000;
app.listen(PORT);
