// routes/products.js
router.get('/seller/:sellerId', async (req, res) => {
    try {
      const products = await Product.find({ seller: req.params.sellerId }); // ili creator, author...
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching seller products' });
    }
  });
  
  