
var express = require('express');
var router = express.Router();
var models = require('../models');


router.get("/", function(req,res){
	res.redirect("/burgers");
});

router.get("/burgers", function(req,res){
	burger.selectAll(function(data){
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});

	/////IN TESTING
	models.Burger.findAll()
	.then(function(burgers){
		res.render("index", {

		});
	});
});

router.post("/burgers/create", function(req, res){
	burger.insertOne(["burger_name"], [req.body.name], function(data){
		res.redirect("/burgers");
	});
});

router.put("/burgers/update/:id", function(req, res){
	var condition = "id = " + req.params.id;
	
	burger.updateOne({"devoured": 1}, condition, function(data){
		res.redirect("/burgers");
	});
});


module.exports = router; 