var http = require("http");
var url = require("url");

function start(route, handle) {
    http_port = 8888;

    var cont = 0;

    console.log("Node.js Strting Server on http://127.0.0.1:" + http_port)

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        cont = cont + 1;
        console.log(cont + ")Request for " + pathname + " received.");
        
        var content = route(handle, pathname);
        
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(content);
        response.end();
    }

    http.createServer(onRequest).listen(http_port);
    console.log("Server has started.");
}

exports.start = start;