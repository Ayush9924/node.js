const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("all students list");
});

// post add a student 
router.post("/",(req,res)=>{
    res.send("student added");
});

// get a student by id
router.get("/:id",(req,res)=>{
    res.send("student id =" +req.params.id);
});

module.exports = router;
