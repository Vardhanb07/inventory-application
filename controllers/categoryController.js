const {
  insertCategory,
  getCategories,
  deleteCategory,
  getCategoryItems,
} = require("../db/query");

function create(req, res) {
  res.render("createCategory");
}

async function postCategory(req, res) {
  await insertCategory(req.body.categoryName);
  res.redirect("/category");
}

async function showCategory(req, res) {
  const data = await getCategories();
  res.render("index", { value: "category", categoryData: data });
}

async function removeCategory(req, res) {
  await deleteCategory(req.params.id);
  res.redirect("/category");
}

async function showItems(req, res) {
  const data = await getCategoryItems(req.params.id);
  res.render("open", { categoryData: data });
}

module.exports = {
  create,
  postCategory,
  showCategory,
  removeCategory,
  showItems,
};
