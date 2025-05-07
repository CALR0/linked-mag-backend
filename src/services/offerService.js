const { Offer, Company } = require('../models/index');

const OfferService = {
  async createOffer(data) {
    const { title, description, modality, companyId, location, publicationDate, closingDate } = data;

    const newOffer = await Offer.create({
      title,
      description,
      modality,
      companyId,
      location,
      publicationDate,
      closingDate,
    });

    return newOffer;
  },

  async updateOffer(id, data) {
    const { title, description, modality, location, publicationDate, closingDate } = data;

    const offer = await Offer.findByPk(id);
    if (!offer) {
      throw new Error('Oferta no encontrada');
    }

    offer.title = title || offer.title;
    offer.description = description || offer.description;
    offer.modality = modality || offer.modality;
    offer.location = location || offer.location;
    offer.publicationDate = publicationDate || offer.publicationDate;
    offer.closingDate = closingDate || offer.closingDate;

    await offer.save();
    return offer;
  },

  async getOfferById(id) {
    const offer = await Offer.findByPk(id, {
      include: ['company'], // Incluir la relación con la empresa
    });
    if (!offer) {
      throw new Error('Oferta no encontrada');
    }
    return offer;
  },

  async getAllOffers() {
    const offers = await Offer.findAll({
      include: ['company'], // Incluir la relación con la empresa
    });
    return offers;
  },

  async deleteOffer(id) {
    const offer = await Offer.findByPk(id);
    if (!offer) {
      throw new Error('Oferta no encontrada');
    }
    await offer.destroy();
    return { message: 'Oferta eliminada correctamente' };
  },
};

module.exports = OfferService;