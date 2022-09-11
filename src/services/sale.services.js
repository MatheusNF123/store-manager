const { salesModel, productModel } = require('../models');
// const { productValidation } = require('./validations/schemas');
// const { validateParams } = require('./validations/validationsInputValues');

const registrationSale = async (produto) => {
  const arrayProd = await Promise.all(produto.map((el) =>
    (productModel.findProductId(el.productId))));
  
  const exist = arrayProd.some((el) => el === undefined);
  if (exist) {
    const mockError = { status: 404, message: 'Product not found' };
    throw mockError;
  }
  const result = await salesModel.registrationSale();
  await salesModel.registrationSaleProduct(result, produto);
  const produtoRegistrado = { status: 201, message: { id: result, itemsSold: produto } };
  return produtoRegistrado;
};

module.exports = {
  registrationSale,
};