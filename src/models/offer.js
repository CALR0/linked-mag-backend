'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate(models) {
      // Relación: Una oferta pertenece a una empresa
      Offer.belongsTo(models.Company, {
        foreignKey: 'companyId',
        as: 'company'
      });

      // Relación: Una oferta tiene muchas postulaciones
      Offer.hasMany(models.Postulation, {
        foreignKey: 'offerId',
        as: 'postulations'
      });
    }
  }

  Offer.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    modality: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['virtual', 'presencial']] // Solo estos
      }
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    publicationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    closingDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pendiente'
    }
  }, {
    sequelize,
    modelName: 'Offer',
    tableName: 'offers',
    timestamps: true,
    hooks: {
      beforeSave: (offer) => {
        const now = new Date();
        if (now > offer.closingDate) {
          offer.status = 'Cerrada';
        } else if (now >= offer.publicationDate && now <= offer.closingDate) {
          offer.status = 'Abierta';
        } else {
          offer.status = 'Pendiente';
        }
      }
    }
  });

  return Offer;
};