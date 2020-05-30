const mongoose = require('mongoose')

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
  }
})

module.exports = mongoose.model('Activity', activitySchema)
