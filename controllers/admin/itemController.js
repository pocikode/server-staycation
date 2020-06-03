const Category = require('../../models/Category')
const Item = require('../../models/Item')
const Image = require('../../models/Image')

module.exports = {
  index: async (req, res) => {
    let categories = await Category.find()
    let alert = req.flash('alert')[0]
    let items = await Item.find()
      .populate('images', 'id url')
      .populate('category', 'id name')

    res.render('admin/item/index', { 
      categories,
      alert,
      items,
      stringify: (arr) => {
        return JSON.stringify(arr)
      }
    })
  },

  store: async (req, res) => {
    let category = await Category.findOne({ _id: req.body.category })
    let item = await Item.create({
      title: req.body.title,
      price: req.body.price,
      city: req.body.city,
      description: req.body.description,
      category: category._id
    })

    category.items.push({ _id: item._id })
    await category.save()

    if (req.files.length > 0) {
      for (let i = 0; i < req.files.length; i++) {
        let image = await Image.create({ url: `images/${req.files[i].filename}` })
        item.images.push({ _id: image._id })
        await item.save()
      }
    }

    req.flash('alert', {
      status: 'success',
      message: 'Success add item'
    })
    res.redirect('/admin/items')
  }
}
