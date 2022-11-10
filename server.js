var http = require('http');
var handleRequest = function(request, response) {
    console.log('Received request for URL: ' + request.url);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
      isBase64Encoded: false,
      statusCode: 200,
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({code: 0, message: 'success', data: {a: 1, b:2, c: {d: 3}}})
    }));
};
var www = http.createServer(handleRequest);
www.listen(9000);
