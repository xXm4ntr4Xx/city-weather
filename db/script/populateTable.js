import query from "../index.js";

/*"city": cityName,
        "country": countryName,
        "region": regionName,
        "temperature": temperatureC,
        "skyCondition": skyCondition,
        "windSpeed": windSpeed*/ 


export async function populateTable() {
  
    const res = await query(
      `INSERT INTO city(city,country,region,temperature,skycondition,windspeed) VALUES ($1, $2, $3, $4, $5, $6) RETURNING title`,
      [cityName,countryName,regionName,temperatureC,skyCondition,windSpeed]
    );
    console.log(res);
  }


