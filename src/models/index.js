const Sequelize = require('sequelize');
const process = require('process');
const dotenv = require('dotenv');
const StudentModel = require('./student');
const CompanyModel = require('./company');
const OfferModel = require('./offer');
const PostulationModel = require('./postulation');
const PostulationStatusModel = require('./postulationStatus');
const OfferStatusModel = require('./offerStatus');
const CurriculumVitaeModel = require('./curriculumVitae');

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
const Company = CompanyModel(sequelize, Sequelize.DataTypes);
const Offer = OfferModel(sequelize, Sequelize.DataTypes);
const Postulation = PostulationModel(sequelize, Sequelize.DataTypes);
const PostulationStatus = PostulationStatusModel(sequelize, Sequelize.DataTypes);
const OfferStatus = OfferStatusModel(sequelize, Sequelize.DataTypes);
const CurriculumVitae = CurriculumVitaeModel(sequelize, Sequelize.DataTypes);

// Crear el objeto db
const db = {
  sequelize,
  Sequelize,
  Student,
  Company,
  Offer,
  Postulation,
  PostulationStatus,
  OfferStatus,
  CurriculumVitae
};

// Asociaciones
Company.associate(db);
Offer.associate(db);
Postulation.associate(db);
PostulationStatus.associate(db);
OfferStatus.associate(db);
Student.associate(db);
CurriculumVitae.associate(db);

module.exports = db;