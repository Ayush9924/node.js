const zlib = require("zlib");
const fs = require("fs");

// var gzip = zlib.createGzip();
// var input = fs.createReadStream("file1.txt");
// var output = fs.createWriteStream("compressfile1.txt.gz");

// input.pipe(gzip).pipe(output);

// decompress 
var unzip = zlib.createUnzip();
var input2 = fs.createReadStream("compressfile1.txt.gz");
var output2 = fs.createWriteStream("file2.txt");
input2.pipe(unzip).pipe(output2);

// var str = "hello world";
// var zlib = require('zilb');
// zlib.deflate(str,function(err,buffer){
//     var val =buffer.toString("base64")
//     if(!err){
//         console.log("compressed String:" +val)
//     }
//     // decompose 
//     const buffer = Buffer.from(val, "base64")
//     zlib.unzip(buffer, function(err,buffer){
//         if(err){
//             console.log("Decomposed String: "+buffer.toString())
//         }
//     })
// })