const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InformationSchema = new Schema({
    name:{
        type:String,
        default: null
    },
    userid:{
        type:String,
        unique: true,
        required:true,
    },
    album: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }]
    
})

const Information = mongoose.model('Information',InformationSchema)
module.exports = Information