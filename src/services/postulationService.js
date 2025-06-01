const { Postulation, Student, Offer } = require('../models/index');

const PostulationService = {
  async createPostulation(data) {
    const { academicProgram, status, studentId, offerId } = data;

    // Solo permitir 'Pendiente', 'Aceptada', 'Rechazada'
    let validStatus = 'Pendiente';
    if (status === 'Aceptada') validStatus = 'Aceptada';
    if (status === 'Rechazada') validStatus = 'Rechazada';

    const newPostulation = await Postulation.create({
      academicProgram,
      studentId,
      offerId,
      status: validStatus
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

    // Solo permitir 'Pendiente', 'Aceptada', 'Rechazada'
    if (status) {
      let validStatus = 'Pendiente';
      if (status === 'Aceptada') validStatus = 'Aceptada';
      if (status === 'Rechazada') validStatus = 'Rechazada';
      postulation.status = validStatus;
    }

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
    await Postulation.destroy({ where: { id } });
    return { message: 'Postulación eliminada correctamente' };
  },

  async getLastAppliedOffer(studentId) {
    const lastPostulation = await Postulation.findOne({
      where: { studentId },
      include: { model: Offer, as: 'offer' },
      order: [['createdAt', 'DESC']]
    });

    if (!lastPostulation) {
      throw new Error('No se encontraron postulaciones');
    }

    const offer = lastPostulation.offer;
    return {
      name: offer.name,
      category: offer.description,
      deadline: offer.date,
      vacancies: offer.vacancies,
      applicants: await Postulation.count({ where: { offerId: offer.id } }),
      city: offer.city,
      phone: offer.phone,
      email: offer.email
    };
  },

  async getAppliedOffersCount(studentId) {
    return await Postulation.count({ where: { studentId } });
  },
};

module.exports = PostulationService;