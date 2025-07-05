import dotenv from 'dotenv'
dotenv.config()

const dbuser = encodeURIComponent(process.env.DB_USER)
const dbpass = encodeURIComponent(process.env.DB_PASS)
console.log(dbuser, dbpass)