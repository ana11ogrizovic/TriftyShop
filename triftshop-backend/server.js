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
const adRoutes = require('./routes/adRoutes');  // Rut/ Ruta za poruke
const Message = require('./models/Message');
const router = express.Router();
const authRoutes = require('./routes/auth'); // Importuj rute za autentifikaciju
const verifyToken = require('./middleware/authMiddleware');
// server.js
const messageRoutes = require('./routes/messages');


dotenv.config();
const app = express();

// 🔹 Middleware
app.use(cors({
  origin: 'http://localhost:3000',  // Podesite ovu vrednost prema vašem frontend-u
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(bodyParser.json());  // Važno da bude pre ruta!
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/ads', adRoutes);
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);




// 🔹 Povezivanje sa MongoDB
mongoose
  .connect(process.env.MONGO_URI, { dbName: 'triftyShop', useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ Database connection error:', err));


// Additional route that was causing the error
router.get('/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    const messages = await Message.find({ productId }).populate('sender', 'fullName email');
    if (messages.length === 0) {
      return res.status(404).json({ message: 'No messages found for this product' });
    }
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



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
      console.log('User not found:', email); // Ako korisnik nije pronađen
      return res.status(401).json({ message: 'User not found' });
    }

    console.log('User found:', user); // Loguje ceo korisnički objekat
    console.log('User ID (_id):', user._id); // Loguje MongoDB ID korisnika


    // Proveri lozinku
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generiši token koristeći `user._id`
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Generated token:', token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);



    // Vraćanje odgovora
    res.json({
      message: 'Login successful',
      token,
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});






// 🔹 Rutine za oglase i poruke

// Ruta za filtriranje proizvoda prema kategoriji
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

// Ostale rute...





app.get('/api/messages/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const messages = await Message.find({ userId }).populate('productId'); // Popunjava productId sa podacima o proizvodu

    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching messages');
  }
});

app.post('/api/messages/sendMessage', async (req, res) => {
  try {
    const { senderId, receiverId, productId, content } = req.body;

    // Ovdje možete proveriti da li su podaci ispravni
    if (!senderId || !receiverId || !content) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Logika za slanje poruke u bazu podataka
    const newMessage = new Message({ senderId, receiverId, productId, content });
    await newMessage.save();

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending message' });
  }
});


app.get('/api/products/user/:userEmail', async (req, res) => {
  try {
    const { userEmail } = req.params;
    console.log('Dohvatanje proizvoda za korisnika:', userEmail);  // Proveri koji e-mail se koristi
    const userProducts = await Product.find({ contactInfo: userEmail });
    res.json(userProducts);
  } catch (error) {
    console.error("Greška pri dohvatanju proizvoda:", error);
    res.status(500).send("Došlo je do greške na serveru.");
  }
});

router.get('/user/:email', async (req, res) => {
  try {
    const email = req.params.email;
    console.log("Fetching products for email:", email);

    const products = await Product.find({ contactInfo: email }); // ✅ Sada traži po emailu
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching user products:", error);
    res.status(500).json({ message: "Server error" });
  }
});



app.delete('/api/products/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Proizvod nije pronađen." });
    }

    res.status(200).json({ message: "Proizvod je uspešno obrisan." });
  } catch (error) {
    console.error("Greška pri brisanju proizvoda:", error);
    res.status(500).send("Došlo je do greške pri brisanju proizvoda.");
  }
});


// 🔹 Pokretanje servera
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
