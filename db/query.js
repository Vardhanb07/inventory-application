const pool = require("./pool");

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
}

async function insertCategory(name) {
  await pool.query("INSERT INTO category (name) VALUES ($1)", [name]);
}

async function getItems() {
  const { rows } = await pool.query("SELECT * FROM item");
  return rows;
}

async function getCategoryItems(category_id) {
  const { rows } = await pool.query("SELECT * FROM item WHERE category_id=$1", [
    category_id,
  ]);
  return rows
}

async function insertItem(name, categoryId) {
  await pool.query("INSERT INTO item (name, category_id) VALUES ($1, $2)", [
    name,
    categoryId,
  ]);
}

async function deleteCategory(id) {
  await pool.query("DELETE FROM item WHERE category_id=$1", [id]);
  await pool.query("DELETE FROM category WHERE id=$1", [id]);
}

async function deleteItem(id) {
  await pool.query("DELETE FROM item WHERE id=$1", [id]);
}

module.exports = {
  getCategories,
  insertCategory,
  getItems,
  getCategoryItems,
  insertItem,
  deleteCategory,
  deleteItem,
};
