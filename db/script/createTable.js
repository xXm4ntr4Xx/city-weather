import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS city(id SERIAL PRIMARY KEY, City_Name VARCHAR(50),Country_Name VARCHAR(50), Region VARCHAR(50), Temperature VARCHAR(50), Sky_Condition VARCHAR(50), Wind_Speed VARCHAR(50))`;


async function createTable() {
  const res = await query(sqlString);
  console.log("Created city table!!!!!", res);
}

createTable();