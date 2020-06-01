const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  is_popular: {
    type: Boolean
  },
  item: {
    type: ObjectId,
    ref: 'Item'
  }
})

module.exports = mongoose.model('Activity', activitySchema)
