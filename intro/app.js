var express = require('express');
var app = express();

app.get('/', function(request, response) {
  //response.send('Hello world');
  response.write('Hello world');
  response.end();
});

app.listen(3000, function() {
  console.log('Express is running on port 3000...');
});