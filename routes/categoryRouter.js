const { Router } = require("express");
const categoryController = require("../controllers/categoryController");

const categoryRouter = Router();

categoryRouter.get("/", categoryController.showCategory);

categoryRouter.get("/create", categoryController.create);

categoryRouter.post("/create", categoryController.postCategory);

categoryRouter.get("/delete/:id", categoryController.removeCategory);

categoryRouter.get("/:id", categoryController.showItems);

module.exports = categoryRouter;
