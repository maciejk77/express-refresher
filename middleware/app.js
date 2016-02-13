// Initial request Client --> Server
// index.html returned
// AJAX requests handle subsequent calls to update website without reload
// JSON is returned Server --> Client with data

var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
  console.log('Express server running on port 3000...')
});