const User = require('../models/User')
const bcrypt = require('bcryptjs')

const enpass = async (password) =>{
    try {
        // Generate a salt 
        const salt = await bcrypt.genSalt(10)
        // Generate a password hash (salt + hash)
        const passwordHashed = await bcrypt.hash(password, salt)
        // password = passwordHashed
        return passwordHashed
    }
    catch (error){
        console.log(error)
    }
}

module.exports = {
    enpass,
}
