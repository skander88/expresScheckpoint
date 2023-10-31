const express = require("express");

const app = express();

const port = 5001;
const datfunc = require("./middle/Date");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/Services", datfunc, (req, res) => {
  res.sendFile(__dirname + "/public/services.html");
});

app.get("/Contact", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log("we did it !");
});
