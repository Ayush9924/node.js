const fs = require("fs");
const path = require("path");

const fileName = "async.txt";
const filePath = path.join(__dirname, fileName);

// create file --- write function (Asynchronous)
fs.writeFile(filePath, "This is async file", "utf-8", (err) => {
    if (err) console.error(err);
    else console.log("File has been created successfully!");
});

// read file
fs.readFile(filePath,"utf-8",(err,data)=>
{
    if(err) console
})