const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  images: [String],
  priceOption: { type: String, required: true },
  condition: { type: String, required: true },
  deliveryMethod: { type: String, required: true },
  group: { type: String, required: true },
  subgroup: { type: String, required: true },
  advertiserName: { type: String, required: true },
  contactInfo: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: '605c72ef153207001f6e39e9' }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
