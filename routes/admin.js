const router = require('express').Router()

const dashboardController = require('../controllers/admin/dashboardController')
const categoryController = require('../controllers/admin/categoryController')
const bankController = require('../controllers/admin/bankController')
const itemController = require('../controllers/admin/itemController')

router.get('/', dashboardController.index)
router.get('/categories', categoryController.index)
router.get('/banks', bankController.index)
router.get('/items', itemController.index)

module.exports = router
