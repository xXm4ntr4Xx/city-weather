import pg from "pg";
import {db} from '../config.js';

const pool = new pg.Pool({
  //Heroku credentials
    user: db.dbuser,
    host: db.dbhost,
    database: db.dbname,
    password: db.dbpassword,
    port: db.dbport,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}