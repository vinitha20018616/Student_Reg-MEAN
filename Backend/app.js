var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3000

mongoose.connect("mongodb+srv://vinitha:Password1@vinitha.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000")
    .then(() => {
        console.log("DB Connectedddd!!!!!!!!!!!");
        server.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
          })
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });

server.use(cors());
server.use(express.json());
server.use(routes);