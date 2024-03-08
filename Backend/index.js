const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const connectionString = process.env.DATABASE_URL;

const app = express();

const TodoSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

// Middlewares
app.use(bodyParser.json());

// Routes
app.get("/", (req, res, next) => {
  res.send("ToDo Home page!");
});

app.get("/tasks", async (re, res) => {
  const tasks = await Todo.find({});
  res.json(tasks);
});

app.get("/task/:id", async (req, res) => {
  const id = req.params.id;
  const task = await Todo.findById(id);
  res.json(task);
});

app.post("/task", async (req, res) => {
  const body = req.body;
  const task = await Todo.create(body);
  res.json(task);
});

app.put("/task/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const task = await Todo.findByIdAndUpdate(id, body);
  res.json(task);
});

app.delete("/task/:id", async (req, res) => {
  const id = req.params.id;
  const task = await Todo.findByIdAndDelete(id);
  res.json(task);
});

// Connection
const connectDB = (url) => mongoose.connect(url);

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(port, () => {
      console.log("App is running in PORT: ", port);
    });
  } catch (error) {
    console.log("Error when connecting: ", error);
  }
};

start();
