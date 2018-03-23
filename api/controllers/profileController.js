'use strict';

var mongoose = require('mongoose');

var Profiles = mongoose.model('Profiles');

// List all profiles that match the user submitted
exports.listProfiles = function(req, res) {
  Profiles.find({user: req.user}, function(err, collection) {
    if (err)
      res.send(err);
    res.json(collection);
  });
};

// Create a new profile from submitted information
exports.createProfile = function(req, res) {
  var prof = new Profiles(req.body);
  prof.save(function(err, message) {
    if (err)
      res.send(err);
    res.json(message);
  });
};
