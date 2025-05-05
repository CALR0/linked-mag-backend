const Sequelize = require('sequelize');
const process = require('process');
const dotenv = require('dotenv');
const StudentModel = require('./student');
const CompanyModel = require('./company');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  String(process.env.DB_PASSWORD),
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  }
);

// Inicializar modelos
const Student = StudentModel(sequelize, Sequelize.DataTypes);
const Company = CompanyModel(sequelize, Sequelize.DataTypes); // Inicializar Company

// Asociaciones, si las hay (por ahora no)
const db = {
  sequelize,
  Sequelize,
  Student,
  Company,
};

module.exports = db;
