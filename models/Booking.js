const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const bookingSchema = new mongoose.Schema({
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  items: [{
    _id: {
      type: ObjectId,
      ref: 'Item',
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    night: {
      type: Number,
      required: true
    }
  }],
  members: [{
    type: ObjectId,
    ref: 'Member'
  }],
  banks: [{
    type: ObjectId,
    ref: 'Bank'
  }],
  proof_payment: {
    type: String,
    required: true
  },
  bank_from: {
    type: String,
    required: true
  },
  account_holder: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Booking', bookingSchema)
