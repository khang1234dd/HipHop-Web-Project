const User = require("../models/User");

const isUser = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);

  if (user.role === 2) next();

  if (user.role !== 0) return res.status(401).json({ error: error.message });

  next();
};

const isAdmin = () => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);

  if (user.role === 2) next();

  if (user.role !== 1) return res.status(401).json({ error: error.message });

  next();
};

module.exports = {
  isUser,
  isAdmin,
};
