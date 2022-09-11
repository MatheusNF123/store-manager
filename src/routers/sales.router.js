const express = require('express');
const { salesController } = require('../controllers');
const { validateRegistrationsale } = require('../middlewares/validationsSales');

const router = express.Router();

router.post('/', validateRegistrationsale, salesController.salesRegistration);
router.get('/:id', salesController.saleId);
router.get('/', salesController.getAllSales);

module.exports = router;