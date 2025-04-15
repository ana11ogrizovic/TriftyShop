const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Product = require('../models/Product');

// 🔸 Storage za slike
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder gde se slike čuvaju
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // npr. 17129812312.jpg
  }
});

const upload = multer({ storage });

// 🔸 Dodavanje proizvoda sa slikama
// 🔸 Dodavanje proizvoda sa slikama
router.post('/add', upload.array('images', 8), async (req, res) => {
  try {
    const {
      itemName, description, price, category, priceOption, condition,
      deliveryMethod, group, subgroup, advertiserName, contactInfo
    } = req.body;

    // Formatiraj group i subgroup
    const formattedGroup = group.toLowerCase().replace(/ & /g, 'and').replace(/ /g, '-');
    const formattedSubgroup = subgroup.toLowerCase().replace(/ /g, '-');




    // Dobavljanje putanja slika
    const imagePaths = req.files.map(file => file.path.replace(/\\/g, '/'));

    const newProduct = new Product({
      itemName,
      description,
      price,
      category,
      images: imagePaths,
      priceOption,
      condition,
      deliveryMethod,
      group: formattedGroup,  // Koristi formatiranu vrednost za group
      subgroup: formattedSubgroup,  // Koristi formatiranu vrednost za subgroup
      advertiserName,
      contactInfo
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Failed to add product', error: error.message });
  }
});


// 🔸 Dohvatanje svih proizvoda
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
});



module.exports = router;