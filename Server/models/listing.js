const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',  
      required: true,  
    },
    images: [{
      type: String,
    }],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Listing', listingSchema)
