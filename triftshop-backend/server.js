const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();
const app = express();

// 🔹 Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());  // Važno da bude pre ruta!

// 🔹 Povezivanje sa MongoDB
mongoose
  .connect(process.env.MONGO_URI, { dbName: process.env.DB_NAME })
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
    console.log('📥 Login attempt:', email);

    // Pronađi korisnika u bazi
    const user = await User.findOne({ email });
    if (!user) {
      console.log('❌ User not found');
      // Ako korisnik ne postoji, vrati specifičnu poruku
      return res.status(401).json({ message: 'Nema korisnika u bazi' });
    }

    // Uporedi lozinku sa sačuvanim hashom
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('🔍 Password check:', isPasswordValid);

    if (!isPasswordValid) {
      console.log('❌ Invalid password');
      // Ako je lozinka pogrešna, vrati generičku poruku
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generiši JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('✅ Login successful, token generated:', token);

    res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});




// 🔹 POKRETANJE SERVERA
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
