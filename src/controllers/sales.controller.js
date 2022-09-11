const { saleServices } = require('../services');

const salesRegistration = async (req, res, next) => {
  try {
    const obj = req.body;
    const result = await saleServices.registrationSale(obj);
    res.status(result.status).json(result.message);
  } catch (error) {
    next(error);
  }
};
const getAllSales = async (req, res, next) => {
  try {
    const { status, message } = await saleServices.getAllSales();
    res.status(status).json(message);
  } catch (error) {
    next(error);
  }
};
const saleId = async (req, res, next) => {
 try {
   const { id } = req.params;
   const { status, message } = await saleServices.findSaleId(id);
   res.status(status).json(message);
 } catch (error) {
   next(error);
 }
};

module.exports = {
  salesRegistration,
  saleId,
  getAllSales,
};