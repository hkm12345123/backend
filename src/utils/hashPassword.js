const bcrypt = require('bcrypt');
// const hashPassword = bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//     return hashPassword;
// });
//use brcyptjs :
const hashPassword = async (password) => {
  const hashed = await bcrypt.hash(password, 10);

  return hashed;
}

module.exports = hashPassword;
