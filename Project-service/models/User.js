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
        default: 'upload/image/1.png',
    },
    role: {
        type: Number,
        default: 0
    },
    lock: {
        type: Boolean,
        default: false
    },
    resetLink:{
        type:String,
        default: ''
    },
    otp:{
        type:String,
        default: ''
    },
    otpFG:{
        type:String,
        default: ''
    },
    activate: {
        type:Boolean,
        default: false,
    },
    album:[{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    post:[{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    song:[{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    favoritesong:[{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    favoritealbum:[{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    favoritepost:[{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    
}, { timestamps: true })

UserSchema.methods.isValidPassword = async function(newPassword) {
    try {
      return await bcrypt.compare(newPassword, this.password)
    } catch (error) {
      throw new Error(error)
    }
  }


const User = mongoose.model('User',UserSchema)
module.exports = User