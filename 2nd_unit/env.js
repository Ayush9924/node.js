// .env.example
// $env.variableName="value"
// const express = require("express")
import express from "express";
import {config} from "dotenv"
config();

const app = express()

const PORT = process.env.PORT
app.get("/home",(req,res)=>{
    res.write("<h1> hrllo world from express</h1>")
    res.write("<h2> done</h2>")
    res.end()
})
app.listen(PORT, ()=>{
    console.log("listining to port")
})
