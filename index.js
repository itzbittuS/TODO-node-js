const express = require('express');
const ejs = require('ejs');
const routes = require('./routes/routes');

const server = express();

server.set('view engine', 'ejs');

// middleware 
server.use(express.static('assets'));
server.use(express.urlencoded({ extended: true }));

// using routes
server.use('/', routes);

server.listen(3000, (err) => {
    if (!err) {
        console.log("Server Running at http://localhost:3000");
    }
});
