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

      // Relación: Una oferta tiene un estado
      Offer.hasOne(models.OfferStatus, {
        foreignKey: 'offerId',
        as: 'status'
      });
    }
  }

  Offer.init({
    name: {
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
        isIn: [['Presencial', 'Híbrido', 'Remoto']]
      }
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    publicationDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isEmail: true
      }
    },
    salary: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    requirements: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    vacancies: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    applicants: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Offer',
    tableName: 'offers',
    timestamps: true
  });

  return Offer;
};