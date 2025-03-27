const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');  // Može i bcrypt, ali koristim bcryptjs ovde


const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });


// Pre-save hook: Hashuje lozinku samo ako već nije hash-ovana
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    // Ako lozinka NE počinje sa '$2', pretpostavljamo da nije hash-ovana
    if (!this.password.startsWith('$2')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
