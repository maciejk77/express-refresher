var express = require('express');
var app = express();

var blocks = {
  "Fixed": "Fastened securely in position", 
  "Movable": "Capable of being moved", 
  "Rotating": "Moving in a circle around its center"
};

// Creating dynamic routes - request.params.name 
app.get('/blocks/:name', function(request, response) {
  var description = blocks[request.params.name];
  if(!description) {
    response.status(404).json('No description provided for: ' + request.params.nameß);
  } else {
    response.json(description);
  }
});

app.listen(3000, function() {
  console.log('Server up and running at port 3000...');
});