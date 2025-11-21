const express = require("express")
const app = express()
const reqfilter = (req, res, next)=>{
    // console.log("reqfilter")
    // next()
    if(!req.query.age)
    {
        res.send("enter the age")
    }
    else if(req.query.age<10)
    {
        res.send("you cannot access")

    }

}
