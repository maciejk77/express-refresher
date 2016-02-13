// Export style called CommonJS

module.exports = function(request, response, next) {
  var start = +new Date();
  var stream = process.stdout;
  var url = request.url;
  var method = request.method;

  response.on('finish', function() { // event emitter listening on response being completed
    var duration = +new Date() - start; // + sign formats date in number of miliseconds
    var message = method + ' to ' + url + '\ntook' + duration + ' ms \n\n';
    stream.write(message);
  });
  next();
}