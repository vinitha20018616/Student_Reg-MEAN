var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect("mongodb://localhost:27017/est")
    .then(() => {
        console.log("DB Connectedddd!!!!!!!!!!!");
        server.listen(8000, function check(error) {
            if (error) {
                console.log("errorr");
            } else {
                console.log("startedddddd");
            }
        });
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

server.use(cors());
server.use(express.json());
server.use(routes);