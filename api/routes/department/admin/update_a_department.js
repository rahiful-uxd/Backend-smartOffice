const express = require('express');
const router = express.Router();
const {
  validate,
  ValidationError,
  Joi,
} = require('express-validation');
//Validations
const departmentValidations = require('../../../validations/department_validation');
// Middlewares
const checkLogin = require('../../../middlewares/checkLogin.js');
const checkAdmin = require('../../../middlewares/checkIsAdmin.js');
// Models
const Department = require('../../../models/department_schema.js');

router.post(
  '/',
  validate(departmentValidations.updateDepartmentValidator),
  checkLogin,
  checkAdmin,
  async (req, res) => {
    try {
      const updateDepartment = await Department.findByIdAndUpdate(
        req.body.id,
        req.body
      );
      res.status(200).json({
        status: 200,
        message: 'Department updated successfully',
        updateDesignation: updateDepartment,
      });
    } catch (err) {
      res.status(400).json({
        status: 400,
        message: err.message,
      });
    }
  }
);

router.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

module.exports = router;
