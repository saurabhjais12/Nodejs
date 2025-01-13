
//Basic Node.js HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');  // Corrected this line
    res.end('Hello sir');
});

server.listen(8000, () => {
    console.log('Server is running at port 8000');
});

//to run< node app.js