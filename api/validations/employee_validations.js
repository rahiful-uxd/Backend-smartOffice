const Joi = require('joi');

const employeeValidations = {
  createOrUpdateEmployeeValidator: {
    body: Joi.object({
      name: Joi.string().min(2).max(30).required(),
      department_id: Joi.string().required(),
      designation_id: Joi.string().required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ['com', 'net', 'jp'] },
        })
        .required(),
      contect_number: Joi.string().required(),
      address: Joi.string().required(),
      description: Joi.string().max(150).required(),
      // image: Joi.any().required(),
      password: Joi.string()
        .min(8)
        .pattern(
          new RegExp(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          )
        )
        .required(),
      admin: Joi.boolean().required(),
      active_status: Joi.boolean().required(),
      access_token: Joi.string().required(),
    }),
  },

  updateEmployeeValidator: {
    body: Joi.object({
      id: Joi.string().required(),
      name: Joi.string().min(2).max(30),
      department_id: Joi.string(),
      designation_id: Joi.string(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'jp'] },
      }),
      contect_number: Joi.string(),
      address: Joi.string(),
      description: Joi.string().max(150),
      // image: Joi.any(),
      password: Joi.string()
        .min(8)
        .pattern(
          new RegExp(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          )
        ),
      admin: Joi.boolean(),

      active_status: Joi.boolean(),
      access_token: Joi.string().required(),
    }),
  },

  updateOwnEmployeeInfoValidator: {
    body: Joi.object({
      name: Joi.string().min(2).max(30),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'jp'] },
      }),
      contect_number: Joi.string(),
      address: Joi.string(),
      description: Joi.string().max(150),     
      access_token: Joi.string().required(),
    }),
  },

  changePasswordValidator: {
    body: Joi.object({
      old_password: Joi.string()
      .min(8)
      .pattern(
        new RegExp(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        )
      ).required(), 
      new_password: Joi.string()
      .min(8)
      .pattern(
        new RegExp(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        )
      ).required(),
      access_token: Joi.string().required(),
    }),
  },
};
module.exports = employeeValidations;
