var express = require("express");
var app = express();
var path = require("path");
var port = (process.env.PORT || 7117);
var dateFormat = require('dateformat');
var time = new Date();
//---añadirle el +1 al horario, para que de nuestra hora.
var horas=time.getHours();
horas=horas+1;
time.setHours(horas);
//-----aqui termina


app.listen(port, (err) => {
    if (!err)
        console.log("Server initialized on port " + port);
    else
        console.log("An error ocurred while trying to initialize server: " + err);
});

//Feedback F02: show time in a determinated format
/*
app.get("/time", (req, res) => {
    res.send("<html><body><h1>" + '"' + dateFormat(time, "dS mmmm 'of' yyyy, HH:MM:ss ") + '"' + "</h1></body><html>");
});

app.get("/", (req, res) => {
    res.send("<html><body><h1><a href=/time>/time</a></h1></body><html>");
});
*/


//Feedback F03

app.use("/",express.static( path.join(__dirname,"public")));

app.get("/", (req, res) => {
    res.send("<html><body><h1><a href=/time>/time</a></h1></body><html>");
});