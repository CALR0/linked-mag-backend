'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      {
        name: 'Tech Solutions',
        email: 'contact@techsolutions.com',
        nitCode: '123456789',
        password: 'hashedpassword1', // Asegúrate de usar contraseñas encriptadas
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Innovatech',
        email: 'info@innovatech.com',
        nitCode: '987654321',
        password: 'hashedpassword2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      // Mas empresas acá
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};