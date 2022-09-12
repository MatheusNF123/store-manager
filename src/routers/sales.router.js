const express = require('express');
const { salesController } = require('../controllers');
const { validateRegistrationsale } = require('../middlewares/validationsSales');

const router = express.Router();

router.post('/', validateRegistrationsale, salesController.salesRegistration);
router.get('/:id', salesController.saleId);
router.get('/', salesController.getAllSales);
router.delete('/:id', salesController.deleteSale);
router.put('/:id', validateRegistrationsale, salesController.updateSale);

module.exports = router;