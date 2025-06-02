const { Offer, Company } = require('../models/index');

const OfferService = {
  async createOffer(data) {
    let {
      name,
      description,
      modality,
      companyId,
      city,
      publicationDate,
      date,
      phone,
      salary,
      requirements,
      vacancies,
      applicants,
      email
    } = data;

    // Asignar fechas por defecto si no vienen en el body
    const now = new Date();
    if (!publicationDate) publicationDate = now;
    if (!date) date = now;
    const createdAt = now;
    const updatedAt = now;

    // Calcular el estado inicial de la oferta
    let status = 'Pausada';
    if (now >= new Date(publicationDate) && now <= new Date(date)) {
      status = 'Abierta';
    } else if (now > new Date(date)) {
      status = 'Cerrada';
    }

    const newOffer = await Offer.create({
      name,
      description,
      modality,
      companyId,
      city,
      publicationDate,
      date,
      phone,
      salary,
      requirements: Array.isArray(requirements) ? requirements : [],
      vacancies,
      applicants: applicants || 0,
      email,
      status,
      createdAt,
      updatedAt
    });

    return newOffer;
  },

  async updateOffer(id, data) {
    const offer = await Offer.findByPk(id);
    if (!offer) {
      throw new Error('Oferta no encontrada');
    }

    Object.keys(data).forEach(key => {
      if (offer[key] !== undefined) {
        offer[key] = data[key];
      }
    });

    // Actualizar el estado en función de las fechas
    const now = new Date();
    let status = 'Pausada';
    if (now >= new Date(offer.publicationDate) && now <= new Date(offer.date)) {
      status = 'Abierta';
    } else if (now > new Date(offer.date)) {
      status = 'Cerrada';
    }
    offer.status = status;

    await offer.save();

    return offer;
  },

  async getAllOffers() {
    return await Offer.findAll({
      include: [
        { model: Company, as: 'company' }
      ]
    });
  },

  async getOfferById(id) {
    return await Offer.findByPk(id, {
      include: [
        { model: Company, as: 'company' }
      ]
    });
  },

  async deleteOffer(id) {
    const offer = await Offer.findByPk(id);
    if (!offer) {
      throw new Error('Oferta no encontrada');
    }
    await Offer.destroy({ where: { id } });
    return { message: 'Oferta eliminada correctamente' };
  }
};

module.exports = OfferService;