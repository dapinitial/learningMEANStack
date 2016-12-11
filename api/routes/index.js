var express = require('express');
var router = express.Router();

// Define the route, method, and then function you would like to run.
router
  .route('/hotels')
  .get(function(req, res) {
    console.log('GET the json');
    res
      .status(200)
      .json( {"jsonData" : true} );
  });

module.exports = router;
