'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Insertar ofertas
    const offers = await queryInterface.bulkInsert(
      'offers',
      [
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
      ],
      { returning: true } // Devuelve las ofertas insertadas
    );

    // Insertar estados de las ofertas
    const now = new Date();
    const offerStatuses = offers.map((offer) => {
      let status = 'Pendiente';
      if (now >= new Date(offer.publicationDate) && now <= new Date(offer.closingDate)) {
        status = 'Abierta';
      } else if (now > new Date(offer.closingDate)) {
        status = 'Cerrada';
      }

      return {
        status,
        offerId: offer.id,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    });

    await queryInterface.bulkInsert('offerStatuses', offerStatuses);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('offerStatuses', null, {});
    await queryInterface.bulkDelete('offers', null, {});
  }
};