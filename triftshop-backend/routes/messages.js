const express = require('express');
const router = express.Router();
const Message = require('../models/Message');  // Putanja do modela poruke

// Definišite rutu za slanje poruke
router.post('/sendMessage', async (req, res) => {
  try {
      const { senderId, receiverId, productId, content } = req.body;

      // Proveri da li su svi podaci prisutni
      if (!senderId || !receiverId || !content) {
          console.log("Missing required fields");
          return res.status(400).json({ message: 'Missing required fields' });
      }

      console.log("Data received:", { senderId, receiverId, productId, content });

      // Logika za slanje poruke u bazu podataka
      const newMessage = new Message({ senderId, receiverId, productId, content });
      await newMessage.save();

      return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
      console.error("Error saving message:", error);
      return res.status(500).json({ message: 'Error sending message' });
  }
});

// routes/messages.js

router.get('/:userId', async (req, res) => {
  try {
      const userId = req.params.userId;
      
      // Pronađi sve poruke koje su vezane za tog korisnika
      const messages = await Message.find({
          $or: [{ senderId: userId }, { receiverId: userId }],
      }).populate('senderId receiverId', 'fullName email'); // Populiraj podatke o korisnicima

      return res.status(200).json(messages);
  } catch (error) {
      console.error("Error fetching messages:", error);
      return res.status(500).json({ message: 'Error fetching messages' });
  }
});

router.get('/received/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(`Fetching messages for user: ${userId}`);

    const msgs = await Message.find({ receiverId: userId })
      .populate('senderId', 'fullName email') // ✅ Popuni podatke o korisniku
      .populate('productId', 'name price'); // ✅ Popuni podatke o proizvodu

    res.status(200).json(msgs); // ✅ Vrati JSON odgovor
  } catch (err) {
    console.error('Error fetching received messages:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;  // Ne zaboravite da eksportujete router
