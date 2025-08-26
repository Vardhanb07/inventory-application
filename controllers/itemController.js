const { getCategories, insertItem, getItems } = require("../db/query");

async function create(req, res) {
  const data = await getCategories();
  res.render("createItem", { categories: data });
}

async function postItems(req, res) {
  await insertItem(req.body.itemName, req.body.itemCategory);
  res.redirect("/item");
}

async function showItem(req, res) {
  const data = await getItems();
  const categories = await getCategories();
  res.render("index", {
    value: "item",
    categories: categories,
    itemData: data,
  });
}

module.exports = {
  create,
  postItems,
  showItem
};
