const { Postulation, Student, Offer } = require('../models/index');

const PostulationService = {
  async createPostulation(data) {
    const { academicProgram, status, studentId, offerId } = data;

    const newPostulation = await Postulation.create({
      academicProgram,
      status,
      studentId,
      offerId
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
    postulation.status = status || postulation.status;

    await postulation.save();
    return postulation;
  },

  async getPostulationById(id) {
    const postulation = await Postulation.findByPk(id, {
      include: [
        { model: Student, as: 'student' },
        { model: Offer, as: 'offer' }
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
        { model: Offer, as: 'offer' }
      ]
    });
    return postulations;
  },

  async deletePostulation(id) {
    const postulation = await Postulation.findByPk(id);
    if (!postulation) {
      throw new Error('Postulación no encontrada');
    }
    await postulation.destroy();
    return { message: 'Postulación eliminada correctamente' };
  },
};

module.exports = PostulationService;