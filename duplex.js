const fs = require("fs");
const path = require("path");
const filename = "test1.txt";
const filepath = path.join(__dirname, filename);

// read data
const readableStream = fs.createReadStream(filepath, { encoding: "utf-8", highWaterMark: 8 });

// write data
const writeableStream = fs.createWriteStream("output.txt");

// pipe data
readableStream.pipe(writeableStream);

// handle error
readableStream.on("error", (err) => console.log(err));
writeableStream.on("error", (err) => console.error(err));
