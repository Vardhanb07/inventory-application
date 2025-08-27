const { Router } = require("express");
const itemController = require("../controllers/itemController");

const itemRouter = Router();

itemRouter.get("/", itemController.showItem);

itemRouter.get("/create", itemController.create);

itemRouter.post("/create", itemController.postItems);

itemRouter.get("/delete/:id", itemController.removeItem);

module.exports = itemRouter;
