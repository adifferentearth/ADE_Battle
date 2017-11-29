var express = require('express');
var app = express();

// Set Port

var port = process.env.PORT || 5000;

app.use(express.static(__dirname));

// Routes

app.get("/", function(req, res){
	res.render("index");
});

app.listen(port, function(){
	console.log("App is running!")
});