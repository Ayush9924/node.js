// transform stream convert file content into upeercase
const fs = require("fs")
const {Transform}= require("stream")
const upperCase = new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    }
});
fs.createReadStream("test1.txt")
.pipe(upperCase)
.pipe(fs.createWriteStream("test3.txt"))
console.log("file transform in uppercase")


