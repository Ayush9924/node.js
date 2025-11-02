const http = require("http")
const server = http.createServer((req, res)=>{
    res.write("hello world welcome to my lobby done for now")
    res.end()
    console.log(req,"req")
})
server.listen(3000, ()=>{
    console.log("server listening")
})

// const http = require("http")
// http.createServer((req,res)=>{
//     res.end("hello w.orld")

// }).listen(3000,()=>{

// })

