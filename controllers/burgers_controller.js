
var express = require('express');
var router = express.Router();

var Burger = require("./../models")["Burgers"];

router.get("/", function(req,res){
	res.redirect("/burgers");
	// console.log("in home");
});

router.get("/burgers", function(req,res){
	// burger.selectAll(function(data){
	// 	var hbsObject = {burgers: data};
	// 	console.log(hbsObject);
	// 	res.render("index", hbsObject);
	// });
	console.log("in burgers");
	Burger.findAll()
	.then(function(burgers){
		// console.log(JSON.stringify(burgers));
		var hbsObject = {burgers: burgers};
		// res.render("index", {burgers: JSON.stringify(burgers)});
		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function(req, res){
	// burger.insertOne(["burger_name"], [req.body.name], function(data){
	// 	res.redirect("/burgers");
	// });
	Burger.create({
		burger_name: req.body.name,
		devoured: false
	}).then(function(burgers){
		res.redirect("/burgers");
	});

});

router.put("/burgers/update/:id", function(req, res){
	// var condition = "id = " + req.params.id;
	
	// burger.updateOne({"devoured": 1}, condition, function(data){
	// 	res.redirect("/burgers");
	// });
	Burger.update({
		devoured: true
	},{
		where: {
			id: req.params.id
		}
	}).then(function(burgers){
		res.redirect("/burgers");
	});
});


module.exports = router; 