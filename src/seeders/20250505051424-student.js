'use strict';
// npx sequelize-cli db:seed:all para montar todos los seed
// npx sequelize-cli db:migrate:undo:all para deshacer migraciones (y luego borramos tablas)
// npx sequelize-cli db:migrate (crear tablas migration)
module.exports = {
  // La función `up` se usa para insertar los datos
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [
      {
        name: 'Carlos Perez',
        email: 'carlos.perez@example.com',
        password: 'hashedpassword1',  
        studentCode: '2025050101',
        academicProgram: JSON.stringify({ name: 'Ingeniería de Sistemas', code: '3147' }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'María Gómez',
        email: 'maria.gomez@example.com',
        password: 'hashedpassword2',
        studentCode: '2025050202',
        academicProgram: JSON.stringify({ name: 'Ingeniería de Sistemas', code: '3147' }),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Más estudiantes aquí si lo deseas
    ]);
  },

  // La función `down` se usa para eliminar los datos insertados
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  }
};