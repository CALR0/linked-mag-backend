'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar postulaciones con status directamente
    await queryInterface.bulkInsert(
      'postulations',
      [
        {
          studentId: 1,
          offerId: 1,
          status: 'Pendiente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 2,
          offerId: 2,
          status: 'Aceptada',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('postulations', null, {});
  }
};