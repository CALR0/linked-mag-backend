// config/config.js
// npm run migrate
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

module.exports = {
  development: {
    username: process.env.DB_USER, // DB_USER
    password: process.env.DB_PASSWORD, // DB_PASSWORD
    database: process.env.DB_NAME, // DB_NAME
    host: process.env.DB_HOST, // DB_HOST
    dialect: 'postgres',
    port: process.env.DB_PORT // DB_PORT
  }
};