'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('companies', [
      {
        nameCompany: 'Tech Solutions',
        emailCompany: 'contact@techsolutions.com',
        phoneCompany: 3001234567,
        NIT: 123456789,
        addressCompany: 'Calle 123 #45-67',
        password: 'hashedpassword1', // Asegúrate de usar contraseñas encriptadas
        deparmentCompany: 'Magdalena',
        cityCompany: 'Santa Marta',
        descriptionCompany: 'Empresa de soluciones tecnológicas.',
        profileImage: 'https://example.com/profile1.jpg',
        banner: 'https://example.com/banner1.jpg',
        selectTypeCompany: 'Privada',
        selectEconomicSector: 'Tecnología',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameCompany: 'Innovatech',
        emailCompany: 'info@innovatech.com',
        phoneCompany: 3019876543,
        NIT: 987654321,
        addressCompany: 'Carrera 45 #67-89',
        password: 'hashedpassword2',
        deparmentCompany: 'Atlántico',
        cityCompany: 'Barranquilla',
        descriptionCompany: 'Empresa innovadora en tecnología.',
        profileImage: 'https://example.com/profile2.jpg',
        banner: 'https://example.com/banner2.jpg',
        selectTypeCompany: 'Pública',
        selectEconomicSector: 'Innovación',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      // Más empresas aquí si lo deseas
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('companies', null, {});
  }
};