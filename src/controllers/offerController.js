const OfferService = require('../services/offerService');

const OfferController = {

  async create(req, res) {
    try {
      const offer = await OfferService.createOffer(req.body);
      return res.status(201).json(offer);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al crear la oferta' });
    }
  },

  async update(req, res) {
    const { id } = req.params;

    try {
      const updatedOffer = await OfferService.updateOffer(id, req.body);
      return res.json(updatedOffer);
    } catch (error) {
      console.error(error);
      if (error.message === 'Oferta no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al actualizar la oferta' });
    }
  },

  async getOfferById(req, res) {
    try {
      const offerId = req.params.id;
      const offer = await OfferService.getOfferById(offerId);

      if (!offer) {
        return res.status(404).json({ message: 'Oferta no encontrada' });
      }

      res.json({
        id: offer.id,
        name: offer.name,
        description: offer.description,
        modality: offer.modality,
        city: offer.city,
        publicationDate: offer.publicationDate,
        date: offer.date,
        salary: new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 2
        }).format(offer.salary),
        companyName: offer.company ? offer.company.name : null,
        status: offer.status ? offer.status.status : null,
        phone: offer.phone,
        email: offer.email
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener la oferta' });
    }
  },

  async getAllOffers(req, res) {
    try {
      const offers = await OfferService.getAllOffers();
      return res.json(offers.map(offer => ({
        id: offer.id,
        name: offer.name, // cambiado de title a name
        description: offer.description,
        modality: offer.modality,
        city: offer.city,
        publicationDate: offer.publicationDate,
        date: offer.date,
        salary: new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 2
        }).format(offer.salary),
        companyName: offer.company ? offer.company.name : null,
        status: offer.status ? offer.status.status : null,
        phone: offer.phone,
        email: offer.email
      })));
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener las ofertas' });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const result = await OfferService.deleteOffer(id);
      return res.json(result);
    } catch (error) {
      console.error(error);
      if (error.message === 'Oferta no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al eliminar la oferta' });
    }
  },
};

module.exports = OfferController;