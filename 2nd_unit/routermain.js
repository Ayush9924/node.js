const express = require("express")
const app = express();

const studentRoutes = require("./students");

app.use("/student", studentRoutes);

app.listen(3000, ()=>{
    console.log("server running at port 3000");
});

// socket is not comming 