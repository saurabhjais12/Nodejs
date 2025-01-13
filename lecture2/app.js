//Modules in Node.js

const fs = require('fs');

// Read file asynchronously
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data);
    }
});

// Write to file asynchronously
fs.writeFile('output.txt', 'Hello, Node.js!', (err) => {
    if (err) console.error(err);
    else console.log('File written successfully');
});
