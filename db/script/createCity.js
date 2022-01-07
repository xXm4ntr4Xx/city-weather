import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS city(id SERIAL PRIMARY KEY, title TEXT, author TEXT)`;

async function createCity() {
  const res = await query(sqlString);
  console.log("Created city table", res);
}

createBooksTable();