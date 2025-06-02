const PostulationService = require('../services/postulationService');
const OfferService = require('../services/offerService');

const PostulationController = {

  async create(req, res) {
    try {
    const data = req.body;
    const postulation = await PostulationService.createPostulation(data);
      return res.status(201).json(postulation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al crear la postulación' });
    }
  },

  async update(req, res) {
    const { id } = req.params;

    try {
      const updatedPostulation = await PostulationService.updatePostulation(id, req.body);
      return res.json(updatedPostulation);
    } catch (error) {
      console.error(error);
      if (error.message === 'Postulación no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al actualizar la postulación' });
    }
  },

  async read(req, res) {
    const { id } = req.params;

    try {
      const postulation = await PostulationService.getPostulationById(id);
      return res.json(postulation);
    } catch (error) {
      console.error(error);
      if (error.message === 'Postulación no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al obtener la postulación' });
    }
  },

  async readAll(req, res) {
    try {
      const postulations = await PostulationService.getAllPostulations();
      return res.json(postulations);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener las postulaciones' });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const result = await PostulationService.deletePostulation(id);
      return res.json(result);
    } catch (error) {
      console.error(error);
      if (error.message === 'Postulación no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al eliminar la postulación' });
    }
  },

  async createPostulationByOffer(req, res) {
    const { offerId } = req.params;
    const { id: studentId, role } = req.user;

    if (role !== 'student') {
      return res.status(403).json({ message: 'Solo los estudiantes pueden aplicar a ofertas' });
    }

    try {
      const postulation = await PostulationService.createPostulationByOffer(studentId, offerId);
      return res.status(201).json(postulation);
    } catch (error) {
      console.error(error);
      if (error.message === 'Estudiante no encontrado' || error.message === 'Oferta no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === 'Ya has aplicado a esta oferta') {
        return res.status(409).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al aplicar a la oferta' });
    }
  },

  async getPostulationsByOffer(req, res) {
    const { offerId } = req.params;
    const { id: companyId, role } = req.user;

    if (role !== 'company') {
      return res.status(403).json({ message: 'Solo las empresas pueden acceder a las postulaciones de sus ofertas' });
    }

    try {
      const postulations = await PostulationService.getPostulationsByOffer(offerId, companyId);
      return res.json(postulations);
    } catch (error) {
      console.error(error);
      if (error.message === 'Oferta no encontrada o no pertenece a la empresa') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al obtener las postulaciones de la oferta' });
    }
  },

  async updateStatusByCompany(req, res) {
    const { id: postulationId } = req.params;
    const { status } = req.body;
    const { id: companyId, role } = req.user;

    if (role !== 'company') {
      return res.status(403).json({ message: 'Solo las empresas pueden actualizar el estado de las postulaciones' });
    }

    try {
      const updatedPostulation = await PostulationService.updatePostulationStatusByCompany(postulationId, companyId, status);
      return res.json(updatedPostulation);
    } catch (error) {
      console.error(error);
      if (error.message === 'Postulación no encontrada o no pertenece a una oferta de la empresa') {
        return res.status(404).json({ message: error.message });
      }
      if (error.message === 'Estado inválido') {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al actualizar el estado de la postulación' });
    }
  }
};

module.exports = PostulationController;