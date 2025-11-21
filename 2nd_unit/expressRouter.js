const express = require("express");
const cookieParser = require("cookie-parser")
const app = express()
app.use(cookieParser())

app.get("/set-cookie",(req,res)=>{
    res.cookie("username","sukh",{
        maxAge: 1000*60*10,
        httpOnly:true
    })
    res.send("cookie has been set")
})

app.get("/get.cookie",(req,res)=>{
    console.log(req.cookies)
    const uname = req.cookies.username
    res.send(`cookie value is :${uname}`)
})

app.get("/delete-cookie",(req,res)=>{
    res.clearCookie("username")
    res.send("cookie deleted")
})

app.listen(3000,()=>{
    console.log("server.listening")
})