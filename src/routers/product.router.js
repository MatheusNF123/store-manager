const express = require('express');
const { productController } = require('../controllers');

const router = express.Router();

router.get('/', productController.product);
router.get('/:id', productController.productId);
router.post('/', productController.productRegistration);

module.exports = router;