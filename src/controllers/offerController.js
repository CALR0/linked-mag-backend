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
    const { applicants } = req.body;

    try {
      const updatedOffer = await OfferService.updateOffer(id, {
        ...req.body,
        applicants: applicants ? applicants + 1 : undefined // Increment applicants if provided
      });
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
        id: offer._id,
        title: offer.title,
        description: offer.description,
        modality: offer.modality,
        location: offer.location,
        publicationDate: offer.publicationDate,
        closingDate: offer.closingDate,
        salary: new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 2
        }).format(offer.salary),
        companyName: offer.companyName,
        status: offer.status
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
        id: offer._id,
        title: offer.title,
        description: offer.description,
        modality: offer.modality,
        location: offer.location,
        publicationDate: offer.publicationDate,
        closingDate: offer.closingDate,
        salary: new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 2
        }).format(offer.salary),
        companyName: offer.companyName,
        status: offer.status
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