'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      modality: {
        type: Sequelize.STRING,
        allowNull: false
      },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'companies', // Relación con la tabla companies
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true
      },
      publicationDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      closingDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      salary: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      requirements: {
        type: Sequelize.ARRAY(Sequelize.STRING), // Array of strings for requirements
        allowNull: true
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
    await queryInterface.dropTable('offers');
  }
};