'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('postulations', [
      {
        academicProgram: Sequelize.literal(`'{"program": "Ingeniería de Sistemas"}'::jsonb`),
        status: 'Pendiente',
        studentId: 1,
        offerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        academicProgram: Sequelize.literal(`'{"program": "Ingeniería de Software"}'::jsonb`),
        status: 'Aprobado',
        studentId: 2,
        offerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('postulations', null, {});
  }
};