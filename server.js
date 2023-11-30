const express = require("express");

const app = express();

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Rakesh" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/login", (req, res) => {
  res.render();
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/register", (req, res) => {
  res.render();
});

app.listen(3000);
