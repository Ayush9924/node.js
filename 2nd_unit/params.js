const express = require("express");
const app = express();

app.get("/user/:username/:rno", (req, res) => {
  console.log(req.params);
  // use template literals with ${}
  res.send(
    `<h1>My name is: ${req.params.username} and registration no is: ${req.params.rno}</h1>`
  );
});


app.listen(1000, () => {
  console.log(`Server is running on port`);
});
