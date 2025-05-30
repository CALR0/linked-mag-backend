'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('offers', 'vacancies', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0, // Default value for vacancies
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('offers', 'vacancies');
  },
};
