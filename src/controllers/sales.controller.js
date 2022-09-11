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

module.exports = {
  salesRegistration,
};