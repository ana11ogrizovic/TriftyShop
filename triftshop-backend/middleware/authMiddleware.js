const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Uzmi token iz Authorization header-a
  if (!token) {
    return res.status(401).json({ message: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifikuj token
    req.user = decoded; // Dodaj korisnika u zahtev
    next(); // Nastavi dalje
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken; // ✅ Ovde izvozimo middleware
