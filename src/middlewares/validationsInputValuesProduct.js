// const productModel = require('../../models/index');
const { productValidation } = require('./validations/schemas');

const validateRegistrationProduct = (req, _res, next) => {
  const { name } = req.body;
  const { error } = productValidation.validate({ name });
  if (error && error.details[0].type === 'any.required') {
    const err = { status: 400, message: error.message };
    throw err;
  }

  if (error && error.details[0].type === 'string.min') {
    const err = { status: 422, message: error.message };
    throw err;
  }
  next();
};

module.exports = {
  validateRegistrationProduct,
};
