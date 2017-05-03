// You need these two to start an express app

// looks for dotenv to load the env variables
require("dotenv").config(); 

var express = require ("express");
var app = express();

// app.use(dotenv);

app.get("/", function(request, respond){
	// respond.send("Hello World");
	respond.json({
		"user": process.env.DB_USER,
		"pass": process.env.DB_PASS
	});
});

app.listen(8080);

console.log("Server is running");