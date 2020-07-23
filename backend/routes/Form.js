const express = require('express');
const router = express.Router();
const formController = require('../controllers/Form')

router.post('/module/:id', formController.createForm)
router.get('/count', formController.countResponse)
router.get('/countproduct', formController.countProduct)
router.get('/countpurpose', formController.countPurpose)
router.get('/:id', formController.getForm)
router.get('/', formController.getAllLocation)
module.exports = router;