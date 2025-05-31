'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar postulaciones
    const postulations = await queryInterface.bulkInsert(
      'postulations',
      [
        {
          academicProgram: Sequelize.literal(`'{"program": "Ingeniería de Sistemas"}'::jsonb`),
          studentId: 1,
          offerId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          academicProgram: Sequelize.literal(`'{"program": "Ingeniería de Software"}'::jsonb`),
          studentId: 2,
          offerId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      { returning: true } // Devuelve las postulaciones insertadas
    );

    // Insertar estados de las postulaciones
    const postulationStatuses = postulations.map((postulation) => ({
      status: 'Abierta', // Estado inicial por defecto
      postulationId: postulation.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('postulationStatuses', postulationStatuses);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('postulationStatuses', null, {});
    await queryInterface.bulkDelete('postulations', null, {});
  }
};