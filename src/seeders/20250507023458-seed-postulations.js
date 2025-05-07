'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('postulations', [
      {
        academicProgram: 'Ingeniería de Sistemas',
        status: 'Pendiente',
        studentId: 1,
        offerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        academicProgram: 'Ingeniería de Software',
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