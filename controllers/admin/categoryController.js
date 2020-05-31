const Category = require('../../models/Category')

module.exports = {
  index: async (req, res) => {
    var categories = await Category.find()
    let alert = req.flash('alert')[0]

    res.render('admin/category/index', { categories, alert })
  },

  store: async (req, res) => {
    try {
      const { name } = req.body
      await Category.create({ name })
    } catch (error) {
      req.flash('alert', {
        status: 'danger',
        message: 'Something Wrong'
      })
    }

    req.flash('alert', {
      status: 'success',
      message: 'Success add category'
    })
    res.redirect('/admin/categories')
  },

  update: async (req, res) => {
    try {
      let category = await Category.findOne({ _id: req.params.id })
      
      if (!category) {
        req.flash('alert', {
          status: 'danger',
          message: 'Category not found'
        })
      }

      category.name = req.body.name
      await category.save()
    } catch (error) {
      console.log(error)
      req.flash('alert', {
        status: 'danger',
        message: 'Something Wrong'
      })
    }

    req.flash('alert', {
      status: 'success',
      message: 'Success update category'
    })
    res.redirect('/admin/categories')
  },

  delete: async (req, res) => {
    let category = await Category.findOne({ _id: req.params.id })
    if (!category) {
      req.flash('alert', {
        status: 'danger',
        message: 'Category not found'
      })
    }

    await category.remove()

    req.flash('alert', {
      status: 'success',
      message: 'Success delete category'
    })
    res.redirect('/admin/categories')
  }
}
