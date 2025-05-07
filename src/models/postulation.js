'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Postulation extends Model {
    static associate(models) {
      // Relación: Una postulación pertenece a un estudiante
      Postulation.belongsTo(models.Student, {
        foreignKey: 'studentId',
        as: 'student'
      });

      // Relación: Una postulación pertenece a una oferta
      Postulation.belongsTo(models.Offer, {
        foreignKey: 'offerId',
        as: 'offer'
      });
    }
  }

  Postulation.init({
    academicProgram: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pendiente',
      validate: {
        isIn: [['Pendiente', 'Aprobado', 'Rechazado']]
      }
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    offerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Postulation',
    tableName: 'postulations',
    timestamps: true
  });

  return Postulation;
};