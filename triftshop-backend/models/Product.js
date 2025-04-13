const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  images: [String],  // Ovo bi trebalo da bude niz stringova
  itemName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  priceOption: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  condition: {
    type: String,
    enum: ['new', 'used'],
    default: 'new'
  },
  deliveryMethod: {
    type: String,
    enum: ['pickup', 'delivery'],
    default: 'pickup'
  },
  category: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  subgroup: {
    type: String
  },
  advertiserName: {
    type: String,
    required: true
  },
  contactInfo: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
