// Definition of the profile data model schema for mongoose
// - Simple string based to start, we can always iterate on this
//   after the framework is doing it's thing.

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter your name.'
    },
    dob: {
        type: String,
        required: "Please enter your date of birth."
    },
    nationality: {
        type: String
    },
    location: {
        type: String
    },
    gender: {
        type: String
    },
    association: {
        type: String
    },
    team: {
        type: String
    },
    sports: {
        type: [String]
    },
    about: {
        type: String
    },
    interests: {
        type: String
    },
    charities: {
        type: String
    },
    about: {
        type: String
    },
    socialMedia: {
        type: [{service: String, handle: String}]
    },
    pets: {
        type: String
    },
    petsDescription: {
        type: String
    },
    drinksAlcohol: {
        type: String
    },
    married: {
        type: String
    },
    date: {
      type: Date,
      default: Date.now
    },
    user: {
        type: String,
        required: "AUTH ERROR"
    }
  });
  
  module.exports = mongoose.model('Profiles', ProfileSchema);
