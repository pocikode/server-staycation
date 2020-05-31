const Category = require('../../models/Category')

module.exports = {
  index: (req, res) => {
    res.render('admin/category/index')
  },

  store: async (req, res) => {
    const { name } = req.body
    await Category.create({ name })

    res.redirect('/admin/categories')
  }
}
