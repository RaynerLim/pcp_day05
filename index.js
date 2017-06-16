//load libraries
var express = require("express");
var fs = require('fs');

//Create an instance of the express application
var app = express();

//Application Variables
var imagesList = [];

//Define a route to static resource
app.use("Images",express.static(__dirname + "/Images"));
app.use(express.static(__dirname + "/Public"));

//Define response for request Index
app.get("/Index", function(req, resp){

    console.log(" >>>  header: %s", req.get("User-Agent"));
    console.log(">>> method %s", req.header);
    console.log(">>> url: %s", req.url);

    var time =(new Date()).toString();

    resp.status(202);
    resp.type("text/plain"); //MINE
    resp.send("<h1>Yes This is the static Page</h1> \nTime: " + time);
  
}
);

//Define response for request randomImage
app.get("/random", function(req, resp){
    console.log(" >>>  header: %s", req.get("User-Agent"));
    console.log(">>> method %s", req.header);
    console.log(">>> url: %s", req.url);

    
}
);

//Read File in /Image
var fs = require('fs');
fs.realpath(__dirname, function(err, path) {
    if (err) {
        console.log(err);
     return;
    }
    console.log('Path is : ' + path);
});

//list programs/files process/load
for(var i in process.argv){
    console.log(">> argv = " + process.argv[i]
    + ", typeof = " + typeof(process.argv[i]));
}

var port = process.argv[2] || 3000;

//bind the app to the port
app.listen(port,function(){
    console.log("Application stated on port %d", port)
});

