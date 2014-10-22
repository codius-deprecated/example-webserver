var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request, response) {
  var indexHtml = fs.readFileSync('public_html/index.html');
  response.writeHead(200);
  response.end(indexHtml);
});

server.listen(8000);
