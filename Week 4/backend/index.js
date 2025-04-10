const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

// Welcome route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory users data
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// Routes
app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { id, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const user = users.find((u) => u.id === id);
  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter((u) => u.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
