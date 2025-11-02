// synchronous and asychronous 
// blocking and non blocking 
const fs = require('fs');
const fileName = 'test.txt';
const path = require('path');
const filePath = path.join(__dirname, fileName);
console.log(filePath);
const writeFile = fs.writeFileSync(filePath,"welcome to lpu");
console.log(writeFile);
// const readFile = fs.readFileSync(filePath, "utf-8");
const readFile = fs.readFileSync(filePath);
console.log(readFile.toString());

// update file append function
const appendFile = fs.appendFileSync(filePath, "\n hello world");
console.log(appendFile);

// rename file
const newFilename = "test1.txt";
const renameFile = fs.renameSync(filePath,newFilename);
console.log(renameFile);

//delete file
const deleteFile = fs.unlinkSync(newFilename);
console.log(deleteFile);