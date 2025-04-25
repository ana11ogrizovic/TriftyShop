const mongoose = require('mongoose');

// Definisanje Product modela
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
  contactInfo: { type: String, required: true }, // Email
  phone: { type: String, required: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: '605c72ef153207001f6e39e9' }
});

// Definisanje Product modela
const Product = mongoose.model('Product', productSchema);

// Upit sa populacijom
Product.find()
  .populate('userId', 'fullName email phone') // Populacija koja uključuje podatke o korisniku (name, email, phone)
  .exec((err, products) => {
    if (err) {
      console.log(err);
    } else {
      console.log(products);
    }
  });

module.exports = Product;
