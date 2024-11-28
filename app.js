// app.js

const express = require("express");
const app = express();
const port = 3000;

// Define a route for the root URL ("/")
app.get("/", (_req, res) => {
  res.send("Hello World!");
});

// Route Andre
app.get("/andre", (_req, res) => {
  res.send("I'm Andre");
});

// Route Vitor
app.get("/vitor", (_req, res) => {
  res.send("I´m Vitor!!");
});

app.get("/lucas", (_, res) => {
  res.send("I'm Lucas.");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
