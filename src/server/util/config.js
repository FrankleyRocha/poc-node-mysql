const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_hostname: process.env.DB_HOSTNAME,
  db_databasename: process.env.DB_DATABASENAME,
  db_port: process.env.DB_PORT,
};