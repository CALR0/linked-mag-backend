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
        statusRegister: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'María Gómez',
        email: 'maria.gomez@example.com',
        password: 'hashedpassword2',
        studentCode: '2025050202',
        academicProgram: JSON.stringify({ name: 'Ingeniería de Sistemas', code: '3147' }),
        statusRegister: 'Aprobado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Juan Rodríguez',
        email: 'juan.rodriguez@example.com',
        password: 'hashedpassword3',
        studentCode: '2025050303',
        academicProgram: JSON.stringify({ name: 'Ingeniería Electrónica', code: '3150' }),
        statusRegister: 'Rechazado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ana Torres',
        email: 'ana.torres@example.com',
        password: 'hashedpassword4',
        studentCode: '2025050404',
        academicProgram: JSON.stringify({ name: 'Derecho', code: '2001' }),
        statusRegister: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Luis Fernández',
        email: 'luis.fernandez@example.com',
        password: 'hashedpassword5',
        studentCode: '2025050505',
        academicProgram: JSON.stringify({ name: 'Administración de Empresas', code: '4001' }),
        statusRegister: 'Aprobado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sofía Ramírez',
        email: 'sofia.ramirez@example.com',
        password: 'hashedpassword6',
        studentCode: '2025050606',
        academicProgram: JSON.stringify({ name: 'Psicología', code: '5002' }),
        statusRegister: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  // La función `down` se usa para eliminar los datos insertados
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  }
};