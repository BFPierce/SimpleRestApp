'use strict';
module.exports = function(app) {
  var controller = require('../controllers/profileController');

  app.route('/profile')
    .get(controller.listProfiles)
    .post(controller.createProfile);
};