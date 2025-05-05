'use strict';
// npx sequelize-cli db:seed:all
module.exports = {
  // La función `up` se usa para insertar los datos
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        name: 'Carlos Perez',
        email: 'carlos.perez@example.com',
        password: 'hashedpassword1',  
        studentCode: '20250501',
        academicPrograms: JSON.stringify('Ingeniería en Sistemas'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'María Gómez',
        email: 'maria.gomez@example.com',
        password: 'hashedpassword2',
        studentCode: '20250502',
        academicPrograms: JSON.stringify('Derecho'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Mas estudiantes acá
    ]);
  },

  // La función `down` se usa para eliminar los datos insertados
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  }
};
