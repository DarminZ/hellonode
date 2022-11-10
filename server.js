var http = require('http');
var handleRequest = function(request, response) {
    console.log('Received request for URL: ' + request.url);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({
      "isBase64Encoded": false,
      "statusCode": 200,
      "headers": {"Content-Type":"text/html"},
      "body": "<html><body><h1>Heading</h1><p>Paragraph.</p></body></html>"
    }));
};
var www = http.createServer(handleRequest);
www.listen(9000);
