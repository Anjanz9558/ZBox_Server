const jwt = require("jsonwebtoken");
const CONFIG = require("../config/config");

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email,roleId:user.roleId }, CONFIG.AdminJwtSecret, {
    expiresIn: CONFIG.JWT_EXPIRES_IN,
  });
};

const generateCustomerToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, CONFIG.FrontendJwtSecret, {
    expiresIn: CONFIG.JWT_EXPIRES_IN,
  });
};
module.exports = { generateToken,generateCustomerToken };
