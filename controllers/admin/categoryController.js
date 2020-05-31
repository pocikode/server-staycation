const Category = require('../../models/Category')

module.exports = {
  index: async (req, res) => {
    var categories = await Category.find()

    res.render('admin/category/index', { categories })
  },

  store: async (req, res) => {
    const { name } = req.body
    await Category.create({ name })

    res.redirect('/admin/categories')
  }
}
