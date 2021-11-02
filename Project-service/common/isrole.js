const { forbidden } = require("@hapi/joi");
const User = require("../models/User");

const isUser = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);

  if (user.role === 2) next();

  if (user.role !== 0) return res.status(403).json({message: "Forbidden"});

  next();
};

const isAdmin =  async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);

  if (user.role === 2) next();

  if (user.role !== 1) return res.status(403).json({message: "Forbidden"});
  
  next();
};

module.exports = {
  isUser,
  isAdmin,
};
