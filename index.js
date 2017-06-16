//load libraries
var express = require("express");
var net = require("net");


//Create an instance of the express application
var app = express();

//Define a route to static resource
app.get("/time", function(req, resp){
    console.log(" >>>  header: %s", req.get("User-Agent"));
    console.log(">>> method %s", req.header);
    console.log(">>> url: %s", req.url);

    var time =(new Date()).toString();

    resp.status(202);
    resp.type("text/plain"); //MINE
    resp.send("time: " + time);
}
);


for(var i in process.argv){
    console.log(">> argv = " + process.argv[i]
    + ", typeof = " + typeof(process.argv[i]));
}

//Define routes
app.use(express.static(__dirname +"/public"));

//Specify port that the app will be listening to
//var port;
var port = process.argv[2] || 3000;


//bind the app to the port
app.listen(port,function(){
    console.log("Application stated on port %d", port)
});
