const express = require("express")
const app = express()
app.get("/json",(req,res)=>{
    res.send({
        id: 1,
        naem:"raj"
    })
})
app.listen(8000,()=>{
    console.log("listing to the port")
})
// diff btwn send or json method 

// res.send()
// res.sendfile()
