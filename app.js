const express = require("express");
require("dotenv").config();
const path = require("node:path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/category");
});

app.get("/category", (req, res) => {
  res.render("index", { value: "category" });
});

app.get("/item", (req, res) => {
  res.render("index", { value: "item" });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
