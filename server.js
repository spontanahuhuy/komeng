const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile(path.join(__dirname, '1javajs.html'), (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`)
});


