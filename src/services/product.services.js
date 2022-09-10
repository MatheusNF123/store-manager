const { productModel } = require('../models/index');
// const { productValidation } = require('./validations/schemas');
// const { validateParams } = require('./validations/validationsInputValues');

const getAllProducts = async () => {
  const result = await productModel.getProducts();
  return { status: 200, message: result };
};

const findProductId = async (id) => {
  const result = await productModel.findProductId(id);
  const erro = { status: 404, message: 'Product not found' };
  if (!result) throw erro;
    return { status: 200, message: result };
};

const registrationProduct = async (produto) => {
  const result = await productModel.registrationProduct(produto);
  return { status: 201, message: { id: result, ...produto } };
};

module.exports = {
  getAllProducts,
  findProductId,
  registrationProduct,
};