//Asynchronous Programming in Node.js
// Callback Example

const fs = require('fs');

fs.readFile('index.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('File Content:', data);
    }
});
