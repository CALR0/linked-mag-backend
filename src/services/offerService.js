const { Offer, OfferStatus, Company } = require('../models/index');

const OfferService = {
  async createOffer(data) {
    const { title, description, modality, companyId, location, publicationDate, closingDate, phoneNumber, salary } = data;

    const newOffer = await Offer.create({
      title,
      description,
      modality,
      companyId,
      location,
      publicationDate,
      closingDate,
      phoneNumber,
      salary
    });

    // Calcular el estado inicial de la oferta
    const now = new Date();
    let status = 'Pendiente';
    if (now >= new Date(publicationDate) && now <= new Date(closingDate)) {
      status = 'Abierta';
    } else if (now > new Date(closingDate)) {
      status = 'Cerrada';
    }

    // Crear el estado inicial en la tabla offerStatuses
    await OfferStatus.create({
      status,
      offerId: newOffer.id
    });

    return newOffer;
  },

  async updateOffer(id, data) {
    const { title, description, modality, location, publicationDate, closingDate, phoneNumber, salary } = data;

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
    offer.phoneNumber = phoneNumber || offer.phoneNumber;
    offer.salary = salary || offer.salary;

    await offer.save();

    // Actualizar el estado en función de las fechas
    const now = new Date();
    let status = 'Pendiente';
    if (now >= new Date(offer.publicationDate) && now <= new Date(offer.closingDate)) {
      status = 'Abierta';
    } else if (now > new Date(offer.closingDate)) {
      status = 'Cerrada';
    }

    const offerStatus = await OfferStatus.findOne({ where: { offerId: id } });
    offerStatus.status = status;
    await offerStatus.save();

    return offer;
  },

  async getOfferById(id) {
    const offer = await Offer.findByPk(id, {
      include: [
        { model: Company, as: 'company' },
        { model: OfferStatus, as: 'status' }
      ]
    });
    if (!offer) {
      throw new Error('Oferta no encontrada');
    }
    return offer;
  },

  async getAllOffers() {
    const offers = await Offer.findAll({
      include: { model: Company, as: 'company' }
    });
    return offers.map(offer => ({
      title: offer.title,
      location: offer.location,
      deadline: offer.closingDate,
      companyLogo: offer.company.logoUrl // Assuming logoUrl exists in company
    }));
  },

  async deleteOffer(id) {
    const offer = await Offer.findByPk(id);
    if (!offer) {
      throw new Error('Oferta no encontrada');
    }
    await Offer.destroy({ where: { id } });
    await OfferStatus.destroy({ where: { offerId: id } });
    return { message: 'Oferta eliminada correctamente' };
  }
};

module.exports = OfferService;