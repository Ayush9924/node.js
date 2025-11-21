// add two number

const http= require("http")
// http.createServer((req,res)=>{
//     console.log(req.url)
//     res.end('hllo world and welcome to node.js')
// }).listen(8000, "127.0.0.1",()=>{
//     console.log("server listening")
// })

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.end("Hello and welcome to Node.js");
    } 
    else if (req.url === "/about") {
        res.end("This is the About page");
    } 
    else {
        res.end(`<a href="/home">Go to Home</a>`);
    }
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});