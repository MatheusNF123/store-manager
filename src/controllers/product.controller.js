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

const productUpdate = async (req, res, next) => {
  try {
  const { id } = req.params;
  const produto = req.body;
  const { status, message } = await productServices.updateProductId(
    id,
    produto,
  );
  res.status(status).json(message);
   } catch (e) {
    next(e);
    }
};

const productDelete = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = await productServices.deleteProductId(id);
    res.status(status).send();
  } catch (e) {
    next(e);
  }
  };

module.exports = {
  product,
  productId,
  productRegistration,
  productUpdate,
  productDelete,
};