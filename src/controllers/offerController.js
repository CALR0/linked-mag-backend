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

  async read(req, res) {
    const { id } = req.params;

    try {
      const offer = await OfferService.getOfferById(id);
      return res.json(offer);
    } catch (error) {
      console.error(error);
      if (error.message === 'Oferta no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al obtener la oferta' });
    }
  },

  async readAll(req, res) {
    try {
      const offers = await OfferService.getAllOffers();
      return res.json(offers);
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

  async getAllOffers(req, res) {
    try {
      const offers = await OfferService.getAllOffers();
      return res.json(offers.map(offer => ({
        title: offer.title,
        location: offer.location,
        deadline: offer.closingDate,
        companyLogo: offer.company.logoUrl // Assuming logoUrl exists in company
      })));
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener las ofertas' });
    }
  },
};

module.exports = OfferController;