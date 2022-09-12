// const productModel = require('../../models/index');
const { salesProductValidation } = require('./validations/schemas');
const { productModel } = require('../models');

const validateRegistrationsale = (req, _res, next) => {
  const produto = req.body;
  const { error } = salesProductValidation.validate(produto);
  if (error && error.details[0].type === 'number.min') {
     const err = {
       status: 422,
       message: error.message.replace('[1].', '').replace('[0].', ''),
     };
     throw err;
   }
  if (error) {
    const err = {
      status: 400,
      message: error.message.replace('[1].', '').replace('[0].', ''),
    };
    throw err;
  }  

  next();
};

const validationFindProductYbId = async (produto) => {
  const arrayProd = await Promise.all(
     produto.map((el) => productModel.findProductId(el.productId)),
   );
  
  const exist = arrayProd.some((el) => el === undefined);
  if (exist) {
    const err = { status: 404, message: 'Product not found' };
    throw err;
  }
};

module.exports = {
  validateRegistrationsale,
  validationFindProductYbId,
};
