const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const User = require('./models/User');
const Product = require('./models/Product');
const adRoutes = require('./routes/adRoutes');  // Rute za oglase

dotenv.config();
const app = express();

// 🔹 Middleware
app.use(cors({
  origin: 'http://localhost:3000',  // Podesite ovu vrednost prema vašem frontend-u
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());  // Važno da bude pre ruta!
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/ads', adRoutes);



// 🔹 Povezivanje sa MongoDB
mongoose
  .connect(process.env.MONGO_URI, { dbName: 'triftyShop', useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Database connection error:', err));

// 🔹 REGISTRACIJA KORISNIKA
app.post('/api/auth/signup', async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Greška pri registraciji:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// 🔹 LOGIN KORISNIKA
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Nema korisnika u bazi' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/ads/women/:category/:group/:subgroup', async (req, res) => {
  const { category, group, subgroup } = req.params;
  try {
    const products = await WomenProduct.find({
      category: category,
      group: group,
      subgroup: subgroup
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching filtered products' });
  }
});

app.get('/api/ads/men/:category/:group/:subgroup', async (req, res) => {
  const { category, group, subgroup } = req.params;
  try {
    const products = await MenProduct.find({
      category: category,
      group: group,
      subgroup: subgroup
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching filtered products' });
  }
});



// 🔹 Ruta za filtriranje proizvoda prema kategoriji
app.get('/api/ads/:category/:group', async (req, res) => {
  const { category, group } = req.params;

  try {
    const products = await Product.find({ category, group });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Ruta za filtriranje proizvoda prema kategoriji 'Women'
app.get('/api/ads/women', async (req, res) => {
  try {
    const products = await Product.find({ category: 'Women' });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/ads/men', async (req, res) => {
  try {
    console.log('Fetching products for men...');
    const products = await Product.find({ category: 'Men' });
    console.log(products);  // Proveri šta vraća
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching men products' });
  }
});

// Ruta za decu
app.get('/api/ads/children', async (req, res) => {
  try {
    console.log('Fetching products for men...');
    const products = await Product.find({ category: { $regex: /^children$/i } });
    console.log('Children products:', products);
    res.json(products);
  } catch (error) {
    console.error('Error fetching children products:', error);
    res.status(500).json({ message: 'Error fetching children products' });
  }
});

// Ruta za kuću
app.get('/api/ads/house', async (req, res) => {
  try {
    const products = await Product.find({ category: { $regex: /^house$/i } });
    console.log('House products:', products);
    res.json(products);
  } catch (error) {
    console.error('Error fetching house products:', error);
    res.status(500).json({ message: 'Error fetching house products' });
  }
});

// Ruta za ljubimce
app.get('/api/ads/pets', async (req, res) => {
  try {
    const products = await Product.find({ category: { $regex: /^pets$/i } });
    console.log('Pets products:', products);
    res.json(products);
  } catch (error) {
    console.error('Error fetching pets products:', error);
    res.status(500).json({ message: 'Error fetching pets products' });
  }
});



// 🔹 Dodajemo rutu za profil korisnika
app.get('/api/user/profile', async (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      fullName: user.fullName,
      email: user.email,
    });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to authenticate token' });
  }
});


// 🔹 POKRETANJE SERVERA
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
