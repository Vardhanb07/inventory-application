#! /usr/bin/env node

const { Client } = require("pg");
const { argv } = require("node:process");

const SQL = `
  CREATE TABLE IF NOT EXISTS category (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT
  );
  CREATE TABLE IF NOT EXISTS item (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    category_id INTEGER references category(id)
  );
  
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
    ssl: {
      rejectUnauthorized: false
    }
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main()