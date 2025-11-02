const fs = require("fs");
const { Writable } = require("stream");

// using readStream
const read = fs.createReadStream("test1.txt", { encoding: "utf-8" });
read.on("data", chunk => console.log(chunk));


// using writeStream
const write = fs.createWriteStream("test2.txt", { encoding: "utf-8" });
write.write("hello world");
write.end();

read.on('error',(err)=>{
    console.log(`error reading from file: ${err}`);
});

write.on('error',(err)=>{
    console.error(`Error writing to file: ${err}`);
});

write.on(`finish`,()=>{
    console.log(`file successfully`);
});