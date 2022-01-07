import query from "../index.js";

const sqlString = `DROP TABLE IF  EXISTS city;`

async function deleteTable() {
  const res = await query(sqlString);
  console.log("Dropped city table", res);
}

deleteTable();