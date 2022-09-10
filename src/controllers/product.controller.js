const { productServices } = require('../services');

const product = async (_req, res, next) => {
  try {
    const { status, message } = await productServices.getAllProducts();
    res.status(status).json(message);
  } catch (error) {
    next(error);
  }
};
const productId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, message } = await productServices.findProductId(id);
    res.status(status).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  product,
  productId,
};