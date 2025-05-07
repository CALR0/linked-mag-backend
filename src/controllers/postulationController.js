const PostulationService = require('../services/postulationService');

const PostulationController = {

  async create(req, res) {
    try {
      const postulation = await PostulationService.createPostulation(req.body);
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
};

module.exports = PostulationController;