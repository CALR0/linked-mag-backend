'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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
        },
        {
          name: 'Analista de Datos',
          description: 'Analista con experiencia en Python y Power BI.',
          modality: 'Híbrido',
          companyId: 3,
          city: 'Bogotá',
          publicationDate: '2025-05-10',
          date: '2025-06-10',
          phone: 3025551234,
          email: 'datos@empresa.com',
          salary: 4500000,
          requirements: ['Python', 'Power BI', 'SQL'],
          status: 'Abierta',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Asistente Administrativo',
          description: 'Se requiere asistente con manejo de Excel y atención al cliente.',
          modality: 'Presencial',
          companyId: 4,
          city: 'Medellín',
          publicationDate: '2025-05-15',
          date: '2025-06-15',
          phone: 3034445566,
          email: 'admin@empresa.com',
          salary: 2500000,
          requirements: ['Excel', 'Atención al cliente'],
          status: 'Abierta',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Ejecutivo Comercial',
          description: 'Buscamos ejecutivo con experiencia en ventas y negociación.',
          modality: 'Remoto',
          companyId: 5,
          city: 'Cali',
          publicationDate: '2025-05-20',
          date: '2025-06-20',
          phone: 3043332211,
          email: 'comercial@empresa.com',
          salary: 3500000,
          requirements: ['Ventas', 'Negociación', 'CRM'],
          status: 'Abierta',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Enfermero/a',
          description: 'Se requiere enfermero/a con experiencia en clínicas.',
          modality: 'Presencial',
          companyId: 6,
          city: 'Bucaramanga',
          publicationDate: '2025-05-25',
          date: '2025-06-25',
          phone: 3052223344,
          email: 'salud@empresa.com',
          salary: 2800000,
          requirements: ['Enfermería', 'Atención al paciente'],
          status: 'Abierta',
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