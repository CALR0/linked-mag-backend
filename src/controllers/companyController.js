const CompanyService = require('../services/companyService');

const CompanyController = {
 
  async create(req, res) {
    try {
      const company = await CompanyService.createCompany(req.body);
      return res.status(201).json(company);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al crear la empresa' });
    }
  },

  async update(req, res) {
    const { nitCode } = req.params;

    try {
      const updatedCompany = await CompanyService.updateCompany(nitCode, req.body);
      return res.json(updatedCompany);
    } catch (error) {
      console.error(error);
      if (error.message === 'Empresa no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al actualizar la empresa' });
    }
  },

  // Obtener una empresa por nitCode
  async read(req, res) {
    const { nitCode } = req.params;

    try {
      const company = await CompanyService.getCompanyByNitCode(nitCode);
      return res.json(company);
    } catch (error) {
      console.error(error);
      if (error.message === 'Empresa no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al obtener la empresa' });
    }
  },

  async readAll(req, res) {
    try {
      const companies = await CompanyService.getAllCompanies();
      return res.json(companies);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al obtener las empresas' });
    }
  },

  async delete(req, res) {
    const { nitCode } = req.params;

    try {
      const result = await CompanyService.deleteCompany(nitCode);
      return res.json(result);
    } catch (error) {
      console.error(error);
      if (error.message === 'Empresa no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al eliminar la empresa' });
    }
  },
};

module.exports = CompanyController;