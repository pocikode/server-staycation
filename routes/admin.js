const router = require('express').Router()
const adminController = require('../controllers/adminController')

router.get('/dashboard', adminController.index)

module.exports = router
