

import pg from "pg";
import db from '../config.js';


const pool = new pg.Pool({
  //Heroku credentials
    host: db.dbhost,
    database: db.dbname,
    user: db.dbuser,
    port: db.dbport,
    password: db.dbpassword,  
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}

console.log(pool)