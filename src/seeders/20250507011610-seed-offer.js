'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar ofertas
    await queryInterface.bulkInsert(
      'offers',
      [
        {
          name: 'Desarrollador Backend',
          description: 'Se busca desarrollador con experiencia en Node.js y PostgreSQL.',
          modality: 'Presencial',
          companyId: 1,
          city: 'Santa Marta',
          publicationDate: '2025-05-01',
          date: '2025-06-01',
          phone: 3001234567,
          email: 'backend@empresa.com',
          salary: 5000000,
          requirements: ['Node.js', 'PostgreSQL', 'Git'],
          status: 'Abierta',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Diseñador UX/UI',
          description: 'Se busca diseñador UX/UI con experiencia en diseño de interfaces web.',
          modality: 'Remoto',
          companyId: 2,
          city: 'Barranquilla',
          publicationDate: '2025-04-01',
          date: '2025-04-30',
          phone: 3019876543,
          email: 'uxui@empresa.com',
          salary: 4000000,
          requirements: ['Figma', 'Adobe XD', 'HTML/CSS'],
          status: 'Cerrada',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('offers', null, {});
  }
};