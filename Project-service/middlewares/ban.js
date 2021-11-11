const User = require("../models/User");

const checkBan = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);

  if (user.role === 2) next();

  else if (user.role === 1) next();

  else if (!user.lock) next();
  else return res.status(403).json({message: "Forbidden"})

  next();
};

module.exports = {
  checkBan,
};
