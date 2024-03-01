const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res, next) => {
  res.send("ToDo Home page!");
});

app.listen(port, () => {
  console.log("App is running in PORT: ", port);
});
