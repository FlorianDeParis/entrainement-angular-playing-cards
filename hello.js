const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'content-Type':'text/plain'});
  res.end('Hello World');
}).listen(3000, 'localhost');