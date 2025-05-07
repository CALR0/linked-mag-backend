'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('offers', [
      {
        title: 'Desarrollador Backend',
        description: 'Se busca desarrollador con experiencia en Node.js y PostgreSQL.',
        modality: 'virtual',
        companyId: 1,
        location: 'Santa Marta',
        publicationDate: '2025-05-01',
        closingDate: '2025-05-31',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Diseñador UX/UI',
        description: 'Se busca diseñador UX/UI con experiencia en diseño de interfaces web.',
        modality: 'presencial',
        companyId: 2,
        location: 'Barranquilla',
        publicationDate: '2025-04-01',
        closingDate: '2025-04-30',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Mas ofertas acá
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('offers', null, {});
  }
};