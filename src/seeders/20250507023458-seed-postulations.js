'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar postulaciones con status directamente
    await queryInterface.bulkInsert(
      'postulations',
      [
        {
          academicProgram: Sequelize.literal(`'{"program": "Ingeniería de Sistemas"}'::jsonb`),
          studentId: 1,
          offerId: 1,
          status: 'Pendiente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          academicProgram: Sequelize.literal(`'{"program": "Ingeniería de Software"}'::jsonb`),
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