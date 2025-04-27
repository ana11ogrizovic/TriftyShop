const express = require('express');
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const bcrypt = require("bcryptjs");

router.put("/update", async (req, res) => {
    const { email, newEmail, newPassword } = req.body;
  
    try {
      // Pronađi korisnika po trenutnom emailu
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "Korisnik nije pronađen" });
      }
  
      // Ažuriraj email korisnika
      if (newEmail) {
        user.email = newEmail;
        console.log(`Email korisnika je promenjen na: ${newEmail}`);
      }
  
      // Ažuriraj šifru korisnika
      if (newPassword) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
      }
  
      // Ažuriraj proizvode koji pripadaju ovom korisniku
      if (newEmail) {
        console.log(`Ažuriranje proizvoda sa emailom ${email} na novi email ${newEmail}`);
        
        // Ažuriraj email u svim proizvodima gde je contactInfo = email
        const result = await Product.updateMany(
          { contactInfo: email },  // Stari email u polju contactInfo
          { $set: { contactInfo: newEmail } } // Novi email u polju contactInfo
        );
  
        console.log("Broj ažuriranih proizvoda:", result.modifiedCount);
      }
  
      // Spasi ažurirani korisnički podatak
      await user.save();
  
      return res.json({ message: "Podaci uspešno ažurirani" });
    } catch (err) {
      console.error("Greška prilikom ažuriranja korisnika:", err);
      res.status(500).json({ message: "Greška na serveru" });
    }
  });
  
  
module.exports = router;
