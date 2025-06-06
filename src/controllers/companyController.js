const CompanyService = require('../services/companyService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CompanyController = {

  async create(req, res) {
    try {
      const companyData = {
        nameCompany: req.body.nameCompany,
        emailCompany: req.body.emailCompany,
        phoneCompany: req.body.phoneCompany,
        NIT: req.body.NIT,
        password: req.body.password,
        selectTypeCompany: req.body.selectTypeCompany,
        selectEconomicSector: req.body.selectEconomicSector,
        addressCompany: req.body.addressCompany,
        deparmentCompany: req.body.deparmentCompany,
        cityCompany: req.body.cityCompany,
        descriptionCompany: req.body.descriptionCompany,
        profileImage: req.body.profileImage,
        banner: req.body.banner,
        statusRegister: req.body.statusRegister // Permite nulo o valor por defecto
      };

      const company = await CompanyService.createCompany(companyData);
      return res.status(201).json(company);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'Error al registrar la empresa: ' + error.message
      });
    }
  },

  async update(req, res) {
    const { NIT } = req.params;

    try {
      const updatedCompany = await CompanyService.updateCompany(NIT, req.body);
      return res.json(updatedCompany);
    } catch (error) {
      console.error(error);
      if (error.message === 'Empresa no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al actualizar la empresa' });
    }
  },

  async updateStatusRegister(req, res) {
    const { NIT } = req.params;
    const { statusRegister } = req.body;

    try {
      const updatedCompany = await CompanyService.updateStatusRegister(NIT, statusRegister);
      return res.json(updatedCompany);
    } catch (error) {
      console.error(error);
      if (
        error.message === 'Empresa no encontrada' ||
        error.message === 'Estado inválido'
      ) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al actualizar el estado de la empresa' });
    }
  },

  async read(req, res) {
    const { NIT } = req.params;

    try {
      const company = await CompanyService.getCompanyByNIT(NIT);
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
    const { NIT } = req.params;

    try {
      const result = await CompanyService.deleteCompany(NIT);
      return res.json(result);
    } catch (error) {
      console.error(error);
      if (error.message === 'Empresa no encontrada') {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Error al eliminar la empresa' });
    }
  },

  async login(req, res) {
    const { NIT, password } = req.body;
    try {
      const company = await CompanyService.findCompanyByNIT(NIT);

      if (!company) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      const validPassword = await bcrypt.compare(password, company.password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }

      const token = jwt.sign({ id: company.id, NIT: company.NIT, role: 'company' }, process.env.JWT_SECRET || 'secreto', {
        expiresIn: '1h',
      });

      const { password: _, ...companyWithoutPassword } = company.toJSON();

      return res.json({
        token,
        company: companyWithoutPassword
      });
    } catch (error) {
      console.error('Error en login:', error);
      // tu registro aun no ha sido aprobado por la universidad
      
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },
};

module.exports = CompanyController;