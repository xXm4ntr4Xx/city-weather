import dotenv from 'dotenv'
dotenv.config()

const db ={
    dbhost: process.env.DB_HOST,
    dbname: process.env.DB_NAME,
    dbuser: process.env.DB_USER,
    dbport: process.env.DB_PORT,
    dbpassword: process.env.DB_PASS
}
console.log(db)

export default db;