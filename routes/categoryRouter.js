const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", (req, res) => {
  res.render("index", { value: "category" });
});

categoryRouter.get("/create", categoryController.create);

module.exports = categoryRouter;
