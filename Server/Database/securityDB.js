const mysql = require('mysql');
//windows_local

// const configuration = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'securitydb',
//   timezone: '+05:00'
// };


//mac local
const configuration = {
  host: "127.0.0.1",
  user: "root",
  password: "root",
  port: 8889,
  database: "starter_security_db",
  timezone: "+05:00",
};

const securityDB = () => {
  const connection = mysql.createConnection(configuration);
  return connection; 
};

module.exports = securityDB;