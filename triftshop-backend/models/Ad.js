const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  images: [String],
  itemName: String,
  price: Number,
  priceOption: {
    type: String,
    enum: ['negotiable', 'fixed'],
    default: 'negotiable',
  },
  description: String,
  condition: {



    
    type: String,
    enum: ['new', 'used'],
    default: 'new',
  },
  deliveryMethod: {
    type: String,
    enum: ['pickup', 'delivery'],
    default: 'pickup',
  },
  category: String,
  group: String,
  subgroup: String, // Dodali smo subgrupu u model
  advertiserName: String,
  contactInfo: String,
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;
