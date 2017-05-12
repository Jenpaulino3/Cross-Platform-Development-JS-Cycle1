var express = require("express"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	Task = require("./task"),
	path = require("path"),
	app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true // Allows us to pull data from our forms
}));

// Send HTML to client
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"));
});

// Creating a new model and inserting to database
app.post("/task", function(req, res){
	var task = new Task({
		name: req.body.taskName,
		description: req.body.desc,
		date: new Date()
	});

	task.save(function(err){
		if (err){
			console.log(err);
		} else {
			res.redirect("/data");
		}
	});
});

app.get("/data", function(req, res){
	Task.find({}, function(err, data){ // Pull every single object and return it as JSON data
		res.json(data);
	});
});

mongoose.connect("mongodb://localhost/task");

app.listen(8080);

console.log("Server is running");