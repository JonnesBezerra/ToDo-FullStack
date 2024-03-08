const express = require("express");

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

app.listen(port, () => {
  console.log("App is running in PORT: ", port);
});
