const express = require('express');
const router = express.Router(); // Ovo je ispravno

const Product = require('../models/Product'); // ili gde god ti je model proizvoda
const User = require('../models/User'); // Takođe, importuj model za korisnika

// Ruta za proizvod sa podacima o prodavcu
router.get('/api/products/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate('userId', 'fullName email phone');
    
    if (!product) {
      console.log('Proizvod nije pronađen');
      return res.status(404).json({ message: 'Product not found' });
    }

    if (!product.userId) {
      console.log('UserId nije pronađen za proizvod');
    }

    console.log('Proizvod:', product);
    console.log('Seller:', product.userId); // Prikazivanje podataka o korisniku
    
    res.json({
      ...product.toObject(),
      seller: {
        name: product.userId.fullName,
        email: product.userId.email,
        phone: product.userId.phone
      }
    });
  } catch (error) {
    console.error('Greška prilikom učitavanja proizvoda:', error); 
    res.status(500).json({ message: 'Error fetching product or seller data' });
  }
});



// Export router-a na kraju fajla
module.exports = router;
