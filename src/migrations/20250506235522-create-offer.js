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
      name: {
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
      city: {
        type: Sequelize.STRING,
        allowNull: true
      },
      publicationDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      phone: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      salary: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      requirements: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      vacancies: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      applicants: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
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