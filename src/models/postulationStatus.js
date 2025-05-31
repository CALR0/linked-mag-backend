'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PostulationStatus extends Model {
    static associate(models) {
      // Relación: Un estado pertenece a una postulación
      PostulationStatus.belongsTo(models.Postulation, {
        foreignKey: 'postulationId',
        as: 'postulation'
      });
    }
  }

  PostulationStatus.init({
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Abierta', 'Cerrada']]
      }
    },
    postulationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PostulationStatus',
    tableName: 'postulationStatuses',
    timestamps: true
  });

  return PostulationStatus;
};