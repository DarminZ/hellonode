var http = require('http');
var handleRequest = function(request, response) {
    console.log('Received request for URL: ' + request.url);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end({a: 1, b:{c: 2}});
};
var www = http.createServer(handleRequest);
www.listen(9000);
