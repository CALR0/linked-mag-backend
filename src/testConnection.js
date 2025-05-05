const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  'linkedmag_db',  // DB_NAME
  'postgres',      // DB_USER
  '1234',          // DB_PASSWORD
  {
    host: 'localhost',  // DB_HOST
    dialect: 'postgres',
    port: 5432          // DB_PORT
  }
);

sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
