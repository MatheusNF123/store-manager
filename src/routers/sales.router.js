const express = require('express');
const { salesController } = require('../controllers');
const { validateRegistrationsale } = require('../middlewares/validationsSales');

const router = express.Router();

router.post('/', validateRegistrationsale, salesController.salesRegistration);

module.exports = router;