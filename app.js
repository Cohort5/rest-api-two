var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb://localhost/rest-api');
var db = mongoose.connection;

app.get('/'), function (req, res) {
    res.send('Hello World!');
});

app.listen(3000);
console.log('Running on port 3000...');
