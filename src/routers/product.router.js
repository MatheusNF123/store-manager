const express = require('express');
const { productController } = require('../controllers');
const { validateRegistrationProduct } = require('../middlewares/validationsInputValuesProduct');

const router = express.Router();

router.get('/', productController.product);
router.get('/:id', productController.productId);
router.post('/', validateRegistrationProduct, productController.productRegistration);
router.put('/:id', validateRegistrationProduct, productController.productUpdate);
router.delete('/:id', productController.productDelete);

module.exports = router;