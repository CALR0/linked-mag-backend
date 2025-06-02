'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'postulations',
      [
        {
          studentId: 1,
          offerId: 1,
          status: 'Pendiente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 2,
          offerId: 2,
          status: 'Pendiente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 3,
          offerId: 3,
          status: 'Pendiente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 4,
          offerId: 4,
          status: 'Pendiente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 5,
          offerId: 5,
          status: 'Pendiente',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 6,
          offerId: 6,
          status: 'Pendiente',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('postulations', null, {});
  }
};