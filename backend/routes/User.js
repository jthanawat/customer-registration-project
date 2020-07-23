const express = require('express');
const router = express.Router();
const adminController = require('../controllers/User')

router.post('/', adminController.createUser)
router.post('/', adminController.listAllUser)
router.post('/', adminController.updateUser)
router.post('/:id', adminController.deleteUser)

module.exports = router;