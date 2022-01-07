import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS city(id SERIAL PRIMARY KEY, city Name TEXT, Region TEXT, Temperature TEXT, Sky Condition TEXT, Wind Speed TEXT)`;

/*"city": cityName,
        "country": countryName,
        "region": regionName,
        "temperature": temperatureC,
        "skyCondition": skyCondition,
        "windSpeed": windSpeed*/ 

async function createTable() {
  const res = await query(sqlString);
  console.log("Created city table!!!!!", res);
}

createTable();