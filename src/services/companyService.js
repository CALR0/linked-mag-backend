const { Company } = require('../models/index');

const CompanyService = {
  async createCompany(data) {
    const {
      nameCompany,
      emailCompany,
      phoneCompany,
      NIT,
      password,
      selectTypeCompany,
      selectEconomicSector,
      addressCompany,
      deparmentCompany,
      cityCompany,
      descriptionCompany,
      profileImage,
      banner,
      statusRegister // Permite nulo o valor por defecto
    } = data;

    const newCompany = await Company.create({
      nameCompany,
      emailCompany,
      phoneCompany,
      NIT,
      password,
      selectTypeCompany,
      selectEconomicSector,
      addressCompany,
      deparmentCompany,
      cityCompany,
      descriptionCompany,
      profileImage,
      banner,
      statusRegister: statusRegister ?? undefined // Si no se envía, usa el default del modelo
    });

    const { password: _, ...companyWithoutPassword } = newCompany.toJSON();
    return companyWithoutPassword;
  },

  async updateCompany(NIT, data) {
    const company = await Company.findOne({ where: { NIT } });
    if (!company) {
      throw new Error('Empresa no encontrada');
    }

    Object.keys(data).forEach(key => {
      if (company[key] !== undefined) {
        company[key] = data[key];
      }
    });

    await company.save();

    const { password: _, ...updatedCompany } = company.toJSON();
    return updatedCompany;
  },

  async updateStatusRegister(NIT, statusRegister) {
    const company = await Company.findOne({ where: { NIT } });
    if (!company) {
      throw new Error('Empresa no encontrada');
    }
    const validStates = ['Aprobado', 'Rechazado', 'Pendiente'];
    if (!validStates.includes(statusRegister)) {
      throw new Error('Estado inválido');
    }
    company.statusRegister = statusRegister;
    await company.save();
    const { password: _, ...companyWithoutPassword } = company.toJSON();
    return companyWithoutPassword;
  },

  async findCompanyByNIT(NIT) {
    const company = await Company.findOne({ where: { NIT } });
    if (!company) {
      throw new Error('Empresa no encontrada');
    }
    return company; // Includes password, only for login
  },

  async getCompanyByNIT(NIT) {
    const company = await this.findCompanyByNIT(NIT);
    const { password: _, ...companyWithoutPassword } = company.toJSON();
    return companyWithoutPassword;
  },

  async getAllCompanies() {
    const companies = await Company.findAll();
    return companies.map(company => {
      const { password: _, ...companyWithoutPassword } = company.toJSON();
      return companyWithoutPassword;
    });
  },

  async deleteCompany(NIT) {
    const company = await Company.findOne({ where: { NIT } });
    if (!company) {
      throw new Error('Empresa no encontrada');
    }
    await company.destroy();
    return { message: 'Empresa eliminada correctamente' };
  },
};

module.exports = CompanyService;