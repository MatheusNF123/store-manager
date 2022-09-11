const { productServices } = require('../services');

const product = async (_req, res) => {
    const { status, message } = await productServices.getAllProducts();
    res.status(status).json(message);
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

const productRegistration = async (req, res) => {
    const { status, message } = await productServices.registrationProduct(req.body);
    res.status(status).json(message);
};

module.exports = {
  product,
  productId,
  productRegistration,
};