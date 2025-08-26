const { insertCategory, getCategories } = require("../db/query");

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

module.exports = {
  create,
  postCategory,
  showCategory,
};
