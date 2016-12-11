var express = require('express');
var app = express();
var path = require('path');
var routes = require('./routes')

app.set('port', 3000);

// Log request object and response object. You can easily limit the responses to a direction by adding '/css', before the anonymous function, etc...
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', routes);
// Setting a route.
// app.get('/', function(req, res) {
//   /** Application is now setup with an enpoint and a route but needs to have a  response sent back. When the http://localhost:3000 is hit NODE will execute the next line of code.  FYI: With Developer Tools open click the Network Tab and refresh the page. Inspect the localhost file and familiarize yourself with the Headers and Timing Tabs.  Crucial */
//   console.log('GET the homepage'); //  Request is sent to NODE - check terminal.
//   // using res.send you can send a response back to the browser.
//   res
//     .status(200)
//     .sendFile(path.join(__dirname, 'public', 'index.html'));
// });

/** Sending back JSON to the browser after a request to /json endpoint.
  */
app.get('/json', function(req, res) {
  console.log('GET the json');
  res
    .status(200)
    .json( {"jsonData" : true} ); // Remember JSON is double-quotes!
});

app.get('/file', function(req, res) {
  console.log('GET the file');
  res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));

});

var server = app.listen(app.get('port'), function() {
  var port  = server.address().port; // Stored in a var so only need to change the port once and it will be updated throughout the app.
  console.log('Magic happens on port ' + port );
});
