const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productController.product);
router.get('/:id', productController.productId);

module.exports = router;