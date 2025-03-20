const mysql = require('mysql');
require('dotenv').config({ path: '../.env' });
const configuration = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
  timezone: process.env.DB_TIMEZONE,
  port: process.env.DB_PORT
};

const projectDB = () => {
  console.log("projectDB || Config: ", configuration)
  const connection = mysql.createConnection(configuration);
  return connection; 
};

module.exports = projectDB;