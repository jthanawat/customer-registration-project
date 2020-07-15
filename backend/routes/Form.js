const express = require('express');
const router = express.Router();
const formController = require('../controllers/Form')

router.get('/', formController.getAllForms)

module.exports = router;