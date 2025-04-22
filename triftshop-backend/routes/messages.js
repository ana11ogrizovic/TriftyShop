const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const authenticateToken = require('../middleware/authenticateToken'); // OBAVEZNO

router.post('/sendMessage', authenticateToken, async (req, res) => {
  const { productId, content } = req.body;

  if (!productId || !content) {
    return res.status(400).json({ message: 'Product ID and content are required' });
  }

  try {
    const sender = req.user;

    const newMessage = new Message({
      productId,
      content,
      sender: sender._id, // 👈 ovo baci grešku ako authenticateToken nije pozvan
    });

    await newMessage.save();
    res.status(200).json(newMessage);
  } catch (err) {
    console.error('Error sending message:', err);
    res.status(500).json({ message: 'Error sending message' });
  }
});

module.exports = router;

