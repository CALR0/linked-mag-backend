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
          name: 'Desarrollador Frontend',
          description: 'Se requiere experiencia en React, JavaScript y CSS.',
          modality: 'Remoto',
          companyId: 1,
          city: 'Santa Marta',
          publicationDate: '2025-05-05',
          date: '2025-06-05',
          phone: 3001234567,
          email: 'frontend@empresa.com',
          salary: 4800000,
          requirements: ['React', 'JavaScript', 'CSS'],
          status: 'Abierta',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Full Stack Developer',
          description: 'Buscamos desarrollador full stack con experiencia en MERN.',
          modality: 'Híbrido',
          companyId: 1,
          city: 'Santa Marta',
          publicationDate: '2025-05-10',
          date: '2025-06-10',
          phone: 3001234567,
          email: 'fullstack@empresa.com',
          salary: 5500000,
          requirements: ['MongoDB', 'Express', 'React', 'Node.js'],
          status: 'Abierta',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'QA Automation',
          description: 'Se requiere ingeniero QA con experiencia en pruebas automatizadas.',
          modality: 'Remoto',
          companyId: 1,
          city: 'Santa Marta',
          publicationDate: '2025-05-15',
          date: '2025-06-15',
          phone: 3001234567,
          email: 'qa@empresa.com',
          salary: 4200000,
          requirements: ['Selenium', 'Cypress', 'Jest'],
          status: 'Abierta',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Scrum Master',
          description: 'Buscamos Scrum Master certificado para proyectos de desarrollo web.',
          modality: 'Presencial',
          companyId: 1,
          city: 'Santa Marta',
          publicationDate: '2025-05-20',
          date: '2025-06-20',
          phone: 3001234567,
          email: 'scrum@empresa.com',
          salary: 6000000,
          requirements: ['Scrum', 'Gestión de proyectos', 'Comunicación'],
          status: 'Abierta',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Diseñador UI/UX',
          description: 'Se busca diseñador UI/UX con experiencia en aplicaciones web.',
          modality: 'Remoto',
          companyId: 1,
          city: 'Santa Marta',
          publicationDate: '2025-05-25',
          date: '2025-06-25',
          phone: 3001234567,
          email: 'uiux@empresa.com',
          salary: 4000000,
          requirements: ['Figma', 'Adobe XD', 'Prototipado'],
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