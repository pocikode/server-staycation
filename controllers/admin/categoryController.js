const Category = require('../../models/Category')

module.exports = {
  index: async (req, res) => {
    var categories = await Category.find()

    res.render('admin/category/index', { categories })
  },

  store: async (req, res) => {
    try {
      const { name } = req.body
      await Category.create({ name })
    } catch (error) {
      console.log(error)
    }

    res.redirect('/admin/categories')
  },

  update: async (req, res) => {
    try {
      let category = await Category.findOne({_id: req.params.id})
      category.name = req.body.name
      await category.save()
    } catch (error) {
      console.log(error)
    }

    res.redirect('/admin/categories')
  },

  delete: async (req, res) => {
    let category = await Category.findOne({_id: req.params.id})
    await category.remove()

    res.redirect('/admin/categories')
  }
}
