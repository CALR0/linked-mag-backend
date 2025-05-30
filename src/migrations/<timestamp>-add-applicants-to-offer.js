'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('offers', 'applicants', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0, // Default value for applicants
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('offers', 'applicants');
  },
};
