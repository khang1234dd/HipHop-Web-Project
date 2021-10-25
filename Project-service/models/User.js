const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique: true,
        lowercase: true,
    },
    name:{
        type: String,
        default: null,
    },
    image:{
        type: String,
        default: null,
    },
    resetLink:{
        type:String,
        default: ''
    },
    otp:{
        type:String,
        default: ''
    },
    album:[{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }]
    
})

UserSchema.pre('save', async function(next) {
    try {
        // Generate a salt 
        const salt = await bcrypt.genSalt(10)
        // Generate a password hash (salt + hash)
        const passwordHashed = await bcrypt.hash(this.password, salt)
        this.password = passwordHashed
        next()
    }
    catch (error){
        next(next)
    }
})


UserSchema.methods.isValidPassword = async function(newPassword) {
    try {
      return await bcrypt.compare(newPassword, this.password)
    } catch (error) {
      throw new Error(error)
    }
  }


const User = mongoose.model('User',UserSchema)
module.exports = User