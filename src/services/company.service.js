const { Company } = require('../models/index');

const CompanyService = {
  async createCompany(data) {
    const { name, email, nitCode, password } = data;

    const newCompany = await Company.create({
      name,
      email,
      nitCode,
      password,
    });

    const { password: _, ...companyWithoutPassword } = newCompany.toJSON();
    return companyWithoutPassword;
  },

  async updateCompany(nitCode, data) {
    const { name, email, password } = data;

    const company = await Company.findOne({ where: { nitCode } });
    if (!company) {
      throw new Error('Empresa no encontrada');
    }

    company.name = name || company.name;
    company.email = email || company.email;
    company.password = password || company.password;

    await company.save();

    const { password: _, ...updatedCompany } = company.toJSON();
    return updatedCompany;
  },

  async getCompanyByNitCode(nitCode) {
    const company = await Company.findOne({ where: { nitCode } });
    if (!company) {
      throw new Error('Empresa no encontrada');
    }
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

  async deleteCompany(nitCode) {
    const company = await Company.findOne({ where: { nitCode } });
    if (!company) {
      throw new Error('Empresa no encontrada');
    }
    await company.destroy();
    return { message: 'Empresa eliminada correctamente' };
  },
};

module.exports = CompanyService;