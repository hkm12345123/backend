const jwt = require("jsonwebtoken");
let { jwtKey } = require("../config");

const genToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id.toString(),
      role: user.role,
      username: user.username,
      email: user.email,
    },
    jwtKey ="secret_example",
    { expiresIn: "100h" }
  );

  return token;
};

module.exports = genToken;
