
var mysql = require("mysql");
// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: "q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
// 	user: "v974kg6y3xsf2oc5",
// 	password: "b7ziglb0j5umwpfd",
// 	database: "lbqaruteypfpc3ax"
// });

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "enter",
	database: "burgers_db"
});

// var sequelize = new Sequelize('burgers_db', 'root', 'enter', {
//   host: 'localhost',
//   dialect: 'mysql'
//   }
// });

connection.connect(function(err){
	if (err){
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

module.exports = connection;
// module.exports = sequelize;