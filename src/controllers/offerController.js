const OfferService = require('../services/offerService');

const OfferController = {

  async create(req, res) {
    console.log('Entró al controlador de crear oferta');
    console.log('Datos recibidos en el backend:', req.body); // docker-compose logs backend
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

      res.json(offer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener la oferta' });
    }
  },

  async getAllOffers(req, res) {
    try {
      const offers = await OfferService.getAllOffers();
      return res.json(offers);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener las ofertas' });
    }
  },

  async getAllOffersByCompany(req, res) {
    const { id: companyId, role } = req.user;

    if (role !== 'company') {
      return res.status(403).json({ message: 'Solo las empresas pueden acceder a sus ofertas' });
    }

    try {
      const offers = await OfferService.getOffersByCompany(companyId);
      return res.json(offers);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener las ofertas de la empresa' });
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