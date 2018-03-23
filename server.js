var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var mongoose = require('mongoose');

var Profile = require('./api/models/profileModel');

var bodyParser = require('body-parser');
  
// Mongoose Setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); 

// Express Setup
app.use(express.static(__dirname + "/src"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Routes for the API
var routes = require('./api/routes/profileRoutes');
routes(app);

// Listen for calls
app.listen(port);