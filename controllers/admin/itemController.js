const Category = require('../../models/Category')

module.exports = {
  index: async (req, res) => {
    let categories = await Category.find()
    res.render('admin/item/index', {
      categories
    })
  }
}
