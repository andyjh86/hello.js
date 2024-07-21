var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! Im just a tiny bit of code but you can see me from any device on your network by typing the local IP of my machine and :8080');
}).listen(8080, '0.0.0.0'); 
