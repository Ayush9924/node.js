import express from "express";
import { nanoid } from "nanoid";

const app = express();
app.use(express.json());

let users = [
  { id: "1", name: "aman", email: "aman123@gmail.com" },
  { id: "2", name: "raj", email: "raj123@gmail.com" },
  { id: "3", name: "neha", email: "neha45@gmail.com" },
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET user by id
app.get("/users/:id", (req, res) => {
  const u = users.find((x) => x.id === req.params.id);
  if (!u) return res.status(404).json({ error: "user not found" });
  res.json(u);
});

// CREATE user
app.post("/users", (req, res) => {
  const { name, email } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "name and email required" });
  }

  const id = typeof nanoid === "function" ? nanoid() : String(Date.now());
  const newUser = { id, name, email };

  users.push(newUser);
  return res.status(201).json(newUser);
});

// UPDATE user (full/partial)
app.put("/users/:id", (req, res) => {
  const { name, email } = req.body || {};
  const idx = users.findIndex((x) => x.id === req.params.id);

  if (idx === -1) {
    return res.status(404).json({ error: "user not found" });
  }

  const updatedUser = {
    ...users[idx],
    ...(name !== undefined ? { name } : {}),
    ...(email !== undefined ? { email } : {}),
  };

  users[idx] = updatedUser;
  return res.json(updatedUser);
});

// START SERVER
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
