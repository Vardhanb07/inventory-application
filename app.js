const express = require("express");
require("dotenv").config();
const path = require("node:path");
const categoryRouter = require("./routes/categoryRouter");
const itemRouter = require("./routes/itemRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/category", categoryRouter);
app.use("/item", itemRouter);

app.get("/", (req, res) => {
  res.redirect("/category")
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on port https://localhost:${port}`);
});
