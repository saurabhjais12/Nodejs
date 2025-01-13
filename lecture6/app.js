//File System in Node.js
// Reading and Writing Files

const fs = require('fs');

// Read a file
fs.readFile('input.txt', 'utf8', (err, data) => {
  
    if(err){
        throw(err);
    }else{
        console.log(data);
    }
});

// Write to a file
fs.writeFile('output.txt', 'Node.js file system example', (err) => {
    if(err){
        throw(err);
    }else{
        console.log('File written successfully!');
    }
});
