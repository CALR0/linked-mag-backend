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
    console.log('getPostulationsByOffer called with:', { offerId, companyId });
    const offer = await Offer.findOne({ where: { id: offerId, companyId } });
    if (!offer) {
      throw new Error('Oferta no encontrada o no pertenece a la empresa');
    }
    console.log('Offer found:', offer.toJSON());

    const postulations = await Postulation.findAll({
      where: { offerId },
      include: [
        { 
          model: Student, 
          as: 'student', 
          attributes: ['id', 'name', 'email', 'studentCode', 'academicProgram'] 
        }
      ],
      attributes: ['createdAt', 'status'] // Include postulation date and status
    });
    console.log('Postulations found:', postulations.map(p => p.toJSON()));

    return postulations.map(postulation => ({
      studentId: postulation.student.id,
      name: postulation.student.name,
      email: postulation.student.email,
      studentCode: postulation.student.studentCode,
      academicProgram: postulation.student.academicProgram,
      postulationDate: postulation.createdAt,
      status: postulation.status
    }));
  },

  async updatePostulationStatusByCompany(postulationId, companyId, status) {
    const postulation = await Postulation.findByPk(postulationId, {
      include: { model: Offer, as: 'offer', where: { companyId } }
    });

    if (!postulation) {
      throw new Error('Postulación no encontrada o no pertenece a una oferta de la empresa');
    }

    // Validar el estado
    const validStatuses = ['Pendiente', 'Aceptada', 'Rechazada'];
    if (!validStatuses.includes(status)) {
      throw new Error('Estado inválido');
    }

    postulation.status = status;
    await postulation.save();

    return postulation;
  },
};

module.exports = PostulationService;