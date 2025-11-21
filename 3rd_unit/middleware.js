const express = require("express")
const reqfilter = (req,res,next)=>{
    console.log("reqFilter")
    next()
}
app.use(reqfilter)
app.get("/home",(req,res)=>{
    res.send("welcomr to home page")

})
