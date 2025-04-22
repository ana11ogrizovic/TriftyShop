const bcrypt = require('bcrypt');

const generatePassword = async () => {
  const hashedPassword = await bcrypt.hash("trifty123", 10);
  console.log("Hashed password:", hashedPassword);
};

generatePassword();
