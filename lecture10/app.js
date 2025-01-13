//Error Handling in Node.js
// Handling Errors


const fs = require('fs');

fs.readFile('nonexistentfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error:', err.message);
    } else {
        console.log(data);
    }
});
