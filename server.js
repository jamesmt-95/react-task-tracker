const express = require("express");
const path = require("path");

const port = process.env.port || 8000;
const hostname = "127.0.0.1";

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, hostname, () => {
  console.log(`App running on ${hostname}:${port}`);
});
