const User = require('../models/User')
const {KEY_SECRET} = require('../config/index')

const changeRole = async (req, res, next) => {
    const userId = req.body.token.sub;

    const user = await User.findById(userId);
  
    if (!user) return res.status(404).json({ message: "User does not exist" });

    if(user.role !== 2) return res.status(403).json({message: "you are not authorized to do "})

    const userId1 = req.value.params.id

    const {keySecret} = req.value.body

    const user1 = await User.findById(userId1);

    if (!user1) return res.status(404).json({ message: "User does not exist" });

    if (keySecret !== KEY_SECRET) return res.status(404).json({ message: "Learn more IoT hihi!" });

    if(user1.role === 0){
        user1.role = 1
    }
    else user1.role =0

    await user1.save()

    return res.status(200).json({ success: true });

}

module.exports = {
    changeRole,
}