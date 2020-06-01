const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  item: {
    type: ObjectId,
    ref: 'Item'
  }
})

module.exports = mongoose.model('Feature', featureSchema)
