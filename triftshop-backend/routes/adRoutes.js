const express = require('express');
const router = express.Router();

// Model za Oglas
const Ad = require('../models/Ad');

// Dodavanje novog oglasa
router.post('/add', async (req, res) => {
  const { title, description, price, category } = req.body;
  
  try {
    const newAd = new Ad({ title, description, price, category });
    await newAd.save();
    res.status(201).json({ message: 'Ad added successfully', ad: newAd });
  } catch (error) {
    console.error('Error adding ad:', error);
    res.status(500).json({ message: 'Failed to add ad' });
  }
});

// Prikaz svih oglasa
router.get('/', async (req, res) => {
  try {
    const ads = await Ad.find();
    res.status(200).json(ads);
  } catch (error) {
    console.error('Error fetching ads:', error);
    res.status(500).json({ message: 'Failed to fetch ads' });
  }
});

module.exports = router;
