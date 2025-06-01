'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameCompany: {
        type: Sequelize.STRING,
        allowNull: false
      },
      emailCompany: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phoneCompany: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      NIT: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
      },
      addressCompany: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deparmentCompany: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cityCompany: {
        type: Sequelize.STRING,
        allowNull: true
      },
      descriptionCompany: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      profileImage: {
        type: Sequelize.STRING, // URL de la imagen de perfil
        allowNull: true
      },
      banner: {
        type: Sequelize.STRING, // URL del banner
        allowNull: true
      },
      selectTypeCompany: {
        type: Sequelize.STRING,
        allowNull: false
      },
      selectEconomicSector: {
        type: Sequelize.STRING,
        allowNull: false
      },
      statusRegister: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'Pendiente'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('companies');
  }
};