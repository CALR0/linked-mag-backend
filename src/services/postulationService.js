const { Postulation, PostulationStatus, Student, Offer } = require('../models/index');

const PostulationService = {
  async createPostulation(data) {
    const { academicProgram, status, studentId, offerId } = data;

    const newPostulation = await Postulation.create({
      academicProgram,
      studentId,
      offerId
    });

    // Crear el estado inicial de la postulación
    await PostulationStatus.create({
      status: status || 'Pendiente',
      postulationId: newPostulation.id
    });

    return newPostulation;
  },

  async updatePostulation(id, data) {
    const { academicProgram, status } = data;

    const postulation = await Postulation.findByPk(id);
    if (!postulation) {
      throw new Error('Postulación no encontrada');
    }

    postulation.academicProgram = academicProgram || postulation.academicProgram;
    await postulation.save();

    if (status) {
      const postulationStatus = await PostulationStatus.findOne({ where: { postulationId: id } });
      postulationStatus.status = status;
      await postulationStatus.save();
    }

    return postulation;
  },

  async getPostulationById(id) {
    const postulation = await Postulation.findByPk(id, {
      include: [
        { model: Student, as: 'student' },
        { model: Offer, as: 'offer' },
        { model: PostulationStatus, as: 'status' }
      ]
    });
    if (!postulation) {
      throw new Error('Postulación no encontrada');
    }
    return postulation;
  },

  async getAllPostulations() {
    const postulations = await Postulation.findAll({
      include: [
        { model: Student, as: 'student' },
        { model: Offer, as: 'offer' },
        { model: PostulationStatus, as: 'status' }
      ]
    });
    return postulations;
  },

  async deletePostulation(id) {
    const postulation = await Postulation.findByPk(id);
    if (!postulation) {
      throw new Error('Postulación no encontrada');
    }
    await Postulation.destroy({ where: { id } });
    await PostulationStatus.destroy({ where: { postulationId: id } });
    return { message: 'Postulación eliminada correctamente' };
  },
};

module.exports = PostulationService;