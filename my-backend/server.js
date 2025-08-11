// console.log("hello world");
// Load the built-in HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Backend World! ');
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
