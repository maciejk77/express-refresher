var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger); // adding to the stack by using use method

app.use(express.static('public'));

app.get('/blocks', function(request, response) {
  var blocks = ['Fixed', 'Movable', 'Roatating'];
  response.json(blocks);
});

app.listen(3000, function() {
  console.log('Server up and running on port 3000...');
});