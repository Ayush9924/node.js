// Express.js is a Node.js framework
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world from Express");
});

app.get("/home", (req, res) => {
    res.send("This is the Home page");
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});
