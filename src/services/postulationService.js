const { Postulation, PostulationStatus, Student, Offer } = require('../models/index');

const PostulationService = {
  async createPostulation(data) {
    const { academicProgram, status, studentId, offerId } = data;

    const newPostulation = await Postulation.create({
      academicProgram,
      studentId,
      offerId
    });

    // Solo permitir 'Abierta' o 'Cerrada'
    let validStatus = 'Abierta';
    if (status === 'Cerrada') validStatus = 'Cerrada';

    // Crear el estado inicial de la postulación
    await PostulationStatus.create({
      status: validStatus,
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
      // Solo permitir 'Abierta' o 'Cerrada'
      let validStatus = 'Abierta';
      if (status === 'Cerrada') validStatus = 'Cerrada';

      const postulationStatus = await PostulationStatus.findOne({ where: { postulationId: id } });
      postulationStatus.status = validStatus;
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
      category: offer.description, // Puedes ajustar si tienes un campo específico para categoría
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