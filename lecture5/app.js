// Working with HTTP and Web Servers
//Creating a Basic HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from HTTP server\n');
});

server.listen(8080, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:8080/');
});


// const http =require('http');

// const server =http.createServer((req,res)=>{
//     res.setHeader('content-Type','text/plain');
//     res.end('hello saurabh bhai can we meet today');

// })
// server.listen(8000,()=>{
//     console.log('saurabh ur server is running at 8000 port');
// })