const { Postulation, Student, Offer } = require('../models/index');

const PostulationService = {
  async createPostulation(data) {
    const { status, studentId, offerId } = data;

    // Solo permitir 'Pendiente', 'Aceptada', 'Rechazada'
    let validStatus = 'Pendiente';
    if (status === 'Aceptada') validStatus = 'Aceptada';
    if (status === 'Rechazada') validStatus = 'Rechazada';

    const newPostulation = await Postulation.create({
      studentId,
      offerId,
      status: validStatus
    });

    return newPostulation;
  },

  async updatePostulation(id, data) {
    const { status } = data;

    const postulation = await Postulation.findByPk(id);
    if (!postulation) {
      throw new Error('Postulación no encontrada');
    }

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

  async createPostulationByOffer(studentId, offerId) {
    const student = await Student.findByPk(studentId);
    if (!student) {
      throw new Error('Estudiante no encontrado');
    }

    const offer = await Offer.findByPk(offerId);
    if (!offer) {
      throw new Error('Oferta no encontrada');
    }

    const existingPostulation = await Postulation.findOne({
      where: { studentId, offerId },
    });
    if (existingPostulation) {
      throw new Error('Ya has aplicado a esta oferta');
    }

    const newPostulation = await Postulation.create({
      studentId,
      offerId,
      status: 'Pendiente',
    });

    offer.applicants += 1;
    await offer.save();

    return newPostulation;
  },

  async getPostulationsByOffer(offerId, companyId) {
    const offer = await Offer.findOne({ where: { id: offerId, companyId } });
    if (!offer) {
      throw new Error('Oferta no encontrada o no pertenece a la empresa');
    }

    const postulations = await Postulation.findAll({
      where: { offerId },
      include: [
        { model: Student, as: 'student', attributes: ['id', 'name', 'email', 'studentCode'] }
      ]
    });

    return postulations;
  },
};

module.exports = PostulationService;