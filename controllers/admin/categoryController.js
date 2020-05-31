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
  },

  update: async (req, res) => {
    let category = await Category.findOne({_id: req.params.id})
    category.name = req.body.name
    await category.save()

    res.redirect('/admin/categories')
  }
}
