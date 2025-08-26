const pool = require("./pool");

async function getCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  return rows;
}

async function getCategory(id) {
  const { rows } = await pool.query("SELECT * FROM category WHERE id=$1", [id]);
  return rows;
}

async function insertCategory(name) {
  await pool.query("INSERT INTO category (name) VALUES ($1)", [name]);
}

async function getItems() {
  const { rows } = await pool.query("SELECT * FROM item");
  return rows;
}

async function getItem(id) {
  const { rows } = await pool.query("SELECT * FROM item WHERE id=$1", [id]);
  return rows;
}

async function insertItem(name, categoryId) {
  await pool.query("INSERT INTO item (name, category_id) VALUES ($1, $2)", [
    name,
    categoryId,
  ]);
}
