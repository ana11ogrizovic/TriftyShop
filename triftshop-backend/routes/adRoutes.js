// routes/adRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');  // Importuj Product model
// routes/adRoutes.js

router.post('/add', async (req, res) => {
    const { itemName, description, price, category, images, priceOption, condition, deliveryMethod, group, subgroup, advertiserName, contactInfo } = req.body;
  
    // Validacija obaveznih polja
    if (!itemName || !price || !category || !group || !subgroup) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    // Provera formata slika (ako su slike niz URL-ova)
    if (images && !Array.isArray(images)) {
      return res.status(400).json({ message: 'Images must be an array of URLs' });
    }
  
    try {
      const newProduct = new Product({
        itemName,
        description,
        price,
        category,
        images,
        priceOption,
        condition,
        deliveryMethod,
        group,
        subgroup,
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
  

// Prikaz svih proizvoda (oglasa)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();  // Koristi Product model za prikaz svih proizvoda u kolekciji "products"
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
});

module.exports = router;

// Ruta za filtriranje proizvoda prema kategoriji, grupi i podgrupi
router.get('/:category/:group/:subgroup', async (req, res) => {
    const { category, group, subgroup } = req.params;
  
    try {
      // Filtriranje proizvoda prema kategoriji, grupi i podgrupi
      const products = await Product.find({
        category: category,
        group: group,
        subgroup: subgroup
      });
  
      // Vraća proizvode koji odgovaraju kriterijumima
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  });
  