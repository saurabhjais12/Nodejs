//Promise Example

const fs = require('fs').promises;

fs.readFile('hello.txt', 'utf8')
    .then(data => {
        console.log('File Content:', data);  // Success case: print the file content
    })
    .catch(err => {
        console.log('Error:', err);  // Error case: print the error
    });
