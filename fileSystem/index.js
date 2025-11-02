// syn way to create file 

const { log } = require("console");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data")

if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("data folder created:");
}
const filePath = path.join(dataFolder, 'example.txt');

fs.writeFileSync(filePath, "hello i created a example.txt file sucessfully");
console.log("file created done");

const readFile = fs.readFileSync(filePath, "Utf8");
console.log("reading content from file is: ",readFile);

fs.appendFileSync(filePath, "\n this is the new line i want to add to the file all set");
console.log("new line is added done:");

// asyn way to create files

const asyncFile = path.join(dataFolder, 'async-example.txt');

fs.writeFile(asyncFile, 'hello async node js', (err)=>{
    if(err) throw err;
    console.log('async file is created sucessfully');
    // we use call back here in async file 
    fs.readFile(asyncFile,'utf8',(err, data)=>{
        if(err) throw err;
        console.log('async file content: ',data);
    
    fs.appendFile(asyncFile,"\n new line added to async file",(err)=>{
        if(err) throw err;
        console.log('appendfile is added')
    })
    })
})
