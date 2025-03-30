// models/Product.js
const mongoose = require('mongoose');

// Kreiranje schema za proizvode
const productSchema = new mongoose.Schema({
  images: [String],  // Polje za slike proizvoda
  itemName: String,  // Naziv proizvoda
  price: Number,     // Cena proizvoda
  priceOption: {
    type: String,
    enum: ['negotiable', 'fixed'],
    default: 'negotiable',  // Opcije za cenu: pregovaračka ili fiksna
  },
  description: String,  // Opis proizvoda
  condition: {
    type: String,
    enum: ['new', 'used'],
    default: 'new',  // Opcije za stanje: novo ili korišćeno
  },
  deliveryMethod: {
    type: String,
    enum: ['pickup', 'delivery'],
    default: 'pickup',  // Opcije za način isporuke: lično preuzimanje ili dostava
  },
  category: String,     // Kategorija proizvoda
  group: String,        // Grupa proizvoda
  subgroup: String,     // Podgrupa proizvoda
  advertiserName: String, // Ime oglašivača
  contactInfo: String,   // Kontakt podaci oglašivača
});

// Ovaj model je sada povezan sa kolekcijom "products" unutar baze "triftyShop"
const Product = mongoose.model('Product', productSchema, 'ads');

module.exports = Product;
