const router = require('express').Router()

const dashboardController = require('../controllers/admin/dashboardController')
const categoryController = require('../controllers/admin/categoryController')

router.get('/', dashboardController.index)
router.get('/categories', categoryController.index)

module.exports = router
