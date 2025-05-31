const { Offer, OfferStatus, Company } = require('../models/index');

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
      createdAt,
      updatedAt
    });

    // Calcular el estado inicial de la oferta
    let status = 'Pendiente';
    if (now >= new Date(publicationDate) && now <= new Date(date)) {
      status = 'Abierta';
    } else if (now > new Date(date)) {
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
    const { name, description, modality, city, publicationDate, date, phone, salary, requirements, vacancies, applicants, email } = data;

    const offer = await Offer.findByPk(id);
    if (!offer) {
      throw new Error('Oferta no encontrada');
    }

    offer.name = name || offer.name;
    offer.description = description || offer.description;
    offer.modality = modality || offer.modality;
    offer.city = city || offer.city;
    offer.publicationDate = publicationDate || offer.publicationDate;
    offer.date = date || offer.date;
    offer.phone = phone || offer.phone;
    offer.salary = salary || offer.salary;
    offer.requirements = Array.isArray(requirements) ? requirements : offer.requirements;
    offer.vacancies = vacancies || offer.vacancies;
    offer.applicants = applicants || offer.applicants;
    offer.email = email || offer.email;

    await offer.save();

    // Actualizar el estado en función de las fechas
    const now = new Date();
    let status = 'Pendiente';
    if (now >= new Date(offer.publicationDate) && now <= new Date(offer.date)) {
      status = 'Abierta';
    } else if (now > new Date(offer.date)) {
      status = 'Cerrada';
    }

    const offerStatus = await OfferStatus.findOne({ where: { offerId: id } });
    offerStatus.status = status;
    await offerStatus.save();

    return offer;
  },

  async getAllOffers() {
    return await Offer.findAll({
      include: [
        { model: Company, as: 'company' },
        { model: OfferStatus, as: 'status' }
      ]
    });
  },

  async getOfferById(id) {
    return await Offer.findByPk(id, {
      include: [
        { model: Company, as: 'company' },
        { model: OfferStatus, as: 'status' }
      ]
    });
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