const fs = require("fs");
// const fs = require("fs/promises");
const path = require("path");

const fileName = "promiss.txt";
const filePath = path.join(__dirname, fileName);

fs.promises.writeFile(filePath, "welcome to lpu", "utf-8")
    .then(console.log("file created sucessfully"))
    .catch((err) => console.error(err));

//read file

fs.promises.readFile(filePath, "utf-8")
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

//update file
fs.promises.appendFile(filePath, "\n hello world", "utf-8")
    .then(console.log("file upadeted successfully"))
    .catch((err) => console.error(err));

//delete file
fs.promises.unlink(fileName)
.then(console.log("file deleted succesfully"))
.catch((err)=>console.error(err));