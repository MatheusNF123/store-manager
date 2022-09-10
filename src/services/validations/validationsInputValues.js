// const productModel = require('../../models/index');
const { productValidation } = require('./schemas');

const validateRegistrationProduct = (produto) => {
  const { error } = productValidation.validate({ ...produto });
  console.log(error.details[0].type);
  let err = { status: 400, message: error.message };
  if (error.details[0].type === 'any.required') throw err;
  console.log('asdasd');
  err = { status: 422, message: error.message };
  if (error.details[0].type === 'string.min') throw err;
}; 

module.exports = {
  validateRegistrationProduct,
};
