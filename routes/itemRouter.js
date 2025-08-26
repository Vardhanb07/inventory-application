const { Router } = require("express");
const itemController = require("../controllers/itemController");

const itemRouter = Router();

itemRouter.get("/", (req, res) => {
  res.render("index", { value: "item" });
});

itemRouter.get("/create", itemController.create);

module.exports = itemRouter;
