const { salesModel } = require('../models');
const valid = require('../middlewares/validationsSales');

const registrationSale = async (produto) => {
  await valid.validationFindProductYbId(produto);
 
  const result = await salesModel.registrationSale();
  produto.forEach(async (el) => {
  await salesModel.registrationSaleProduct(result, el);
});

  const produtoRegistrado = { status: 201, message: { id: result, itemsSold: produto } };
  return produtoRegistrado;
};

const getAllSales = async () => {
  const result = await salesModel.getAllSales();
  return { status: 200, message: result };
};

const findSaleId = async (id) => {
  const result = await salesModel.findSaleId(id);
  if (result.length < 1) {
    const err = { status: 404, message: 'Sale not found' };
    throw err;
  }
  return { status: 200, message: result };
};

const deleteSaleId = async (id) => {
   const result = await salesModel.deleteSaleId(id);
  if (result < 1) { 
    const err = { status: 404, message: 'Sale not found' };
    throw err;
  } 
  return { status: 204 };
};

const updateSaleId = async (id, produto) => {
  await findSaleId(id);
   await valid.validationFindProductYbId(produto);

  produto.forEach(async (el) => salesModel.updateSaleId(id, el));

    return { status: 200, message: { saleId: id, itemsUpdated: [...produto] } };
};

module.exports = {
  registrationSale,
  getAllSales,
  findSaleId,
  deleteSaleId,
  updateSaleId,
};