import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

// use a 302 (temporary) redirect, or just res.redirect("/user")
app.get("/about", (req, res) => {
  res.redirect(302, "/user");
});

app.get("/home", (req, res) => {
  res.redirect("/user");
});

app.get("/user", (req, res) => {
  res.send("Data is coming from userpage here 123");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
