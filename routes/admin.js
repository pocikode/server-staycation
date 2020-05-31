const router = require('express').Router()

const dashboardController = require('../controllers/admin/dashboardController')
const categoryController = require('../controllers/admin/categoryController')
const bankController = require('../controllers/admin/bankController')

router.get('/', dashboardController.index)
router.get('/categories', categoryController.index)
router.get('/banks', bankController.index)

module.exports = router
