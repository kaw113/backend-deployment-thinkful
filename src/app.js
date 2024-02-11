const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

// Build your routes here

const sayPong = (req, res, next) => { 
  res.send("pong!");
}

const giveWelcome = (req, res, next) => {
  res.send("Welcome to my server.");
}

app.get("/ping", sayPong);
app.get("/welcome", giveWelcome);


module.exports = app;
