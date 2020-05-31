const router = require('express').Router()

const dashboardController = require('../controllers/admin/dashboardController')
const categoryController = require('../controllers/admin/categoryController')
const bankController = require('../controllers/admin/bankController')
const itemController = require('../controllers/admin/itemController')
const bookingController = require('../controllers/admin/bookingController')

router.get('/', dashboardController.index)

router.get('/categories', categoryController.index)
router.post('/categories', categoryController.store)
router.put('/categories/:id', categoryController.update)

router.get('/banks', bankController.index)
router.get('/items', itemController.index)
router.get('/booking', bookingController.index)

module.exports = router
