var express = require('express');
var app = express();

app.get('/', function(request, response) {
  //response.send('Hello world');
  response.write('Hello world');
  response.end();
});

app.get('/blocks', function(request, response) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];
  // response.send(blocks); // .send automatically serialize to JSON as a default
  response.json(blocks); // same as above, serialize to JSON
});

// Redirect to new partial /parts - 302 status 'moved temporarily'
app.get('/clock', function(request, response) {
  response.redirect('/parts');
});

// Redirect to /parts partial - 301 status 'moved permanently'
app.get('/car', function(request, response) {
  response.redirect(301, '/parts');
});

app.get('/sometext', function(request, response) {
  var sometext = '<ul><li>Some</li><li>Text</li></ul>';
  response.send(sometext);
});


app.listen(3000, function() {
  console.log('Express is running on port 3000...');
});