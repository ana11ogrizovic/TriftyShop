const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('./models/User');
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

// 🔹 Povezivanje sa MongoDB
mongoose
  .connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME, useNewUrlParser: true, useUnifiedTopology: true })
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

// 🔹 Povezivanje rute za oglase
app.use('/api/ads', adRoutes);

// 🔹 POKRETANJE SERVERA
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
