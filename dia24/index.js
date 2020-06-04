"use strict";
exports.__esModule = true;
var http = require("http");
var server = http.createServer(function (req, res) {
    console.log("\nPeticion recibida");
    var method = req.method, url = req.url, headers = req.headers;
    console.log('method used:\t', method);
    console.log('url:\t\t', url);
    console.log('user-agent:\t', headers['user-agent']);
    console.log('content-type:\t', headers['content-type']);
    console.log('content-length:\t', headers['content-length']);
    if (url === '/') {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write('{"ok":"true", "messege":"Recibido!"}');
    }
    else if (url === '/bye') {
        res.writeHead(200, { "content-type": "application/json" });
        res.write('{"ok":"true", "messege":"Adios"}');
    }
    res.end();
});
server.listen(3000);
