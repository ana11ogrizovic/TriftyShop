const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('./models/User');
const Product = require('./models/Product'); // Importuj Product model
const adRoutes = require('./routes/adRoutes'); // Rute za oglase
dotenv.config();
const app = express();

// 🔹 Middleware
app.use(cors({
  origin: 'http://localhost:3000',  // Podesite ovu vrednost prema vašem frontend-u
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());  // Važno da bude pre ruta!

// 🔹 Povezivanje sa MongoDB (povezivanje sa "triftyShop" bazom i kolekcijom "ads")
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

    // Pronađi korisnika u bazi
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Nema korisnika u bazi' });
    }

    // Uporedi lozinku sa sačuvanim hashom
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generiši JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// 🔹 API endpoint za dodavanje proizvoda u bazu (dodavanje u "ads" kolekciju)
app.post('/api/ads', async (req, res) => {
  const { images, itemName, price, priceOption, description, condition, deliveryMethod, category, group, subgroup, advertiserName, contactInfo } = req.body;
  try {
    const newProduct = new Product({
      images,
      itemName,
      price,
      priceOption,
      description,
      condition,
      deliveryMethod,
      category,
      group,
      subgroup,
      advertiserName,
      contactInfo,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: 'Failed to add product' });
  }
});

// 🔹 Ruta za vraćanje svih proizvoda
// Ruta za vraćanje svih proizvoda
app.get('/api/ads', async (req, res) => {
  try {
    const products = await Product.find();  // Vraća sve proizvode iz baze
    res.json(products);  // Vraćanje proizvoda u JSON formatu
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/ads/tshirt', async (req, res) => {
  try {
    const products = await Product.find({ subgroup: 'T-shirt' });
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// Ruta za filtriranje proizvoda prema kategoriji, grupi i subgrupi
app.get('/api/ads/:category/:group', async (req, res) => {
  const { category, group } = req.params; // Prima parametre iz URL-a (category i group)

  try {
    const products = await Product.find({ category, group });  // Filtriranje proizvoda prema kategoriji i grupi
    res.json(products);  // Vraća filtrirane proizvode u JSON formatu
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Dodajemo rutu za profil korisnika
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

// Ruta za filtriranje proizvoda prema kategoriji 'Women'
app.get('/api/ads/women', async (req, res) => {
  try {
    const products = await Product.find({ category: 'Women' });  // Filtriranje proizvoda samo za kategoriju "Women"
    res.json(products);  // Vraćanje proizvoda ka frontendu
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 🔹 Povezivanje rute za oglase
app.use('/api/ads', adRoutes);  // Povezivanje sa adRoutes fajlom

// 🔹 POKRETANJE SERVERA
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
