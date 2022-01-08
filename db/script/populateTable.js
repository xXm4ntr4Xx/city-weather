import query from "../index.js";


 async function populateTable(cityName,countryName,regionName,temperatureC,skyCondition,windSpeed) {
  
    const res = await query(
      `INSERT INTO city(City_Name, Country_Name, Region, Temperature, Sky_Condition, Wind_Speed) VALUES ($1, $2, $3, $4, $5, $6)`,
      [cityName,countryName,regionName,temperatureC,skyCondition,windSpeed]
    );
    
  }


//testing populate table
  // populateTable('Milan','Italy','Lombardia',4,'Fog',"yes");
  // populateTable('London','UK','ardia',13,'Clear',"ys");
  // populateTable('Madrid','Spain','Madrid',12,'Fog',"yes");
  // populateTable('Berlin','Germany','Berlin',9,'Rain',"ys");
  // populateTable('Moscow','Russia','Moscow-City',-5,'Cloudy',"yes");
  // populateTable('Vienna','Austria','Wien',3,'Fg',"Partial Cloudy");

