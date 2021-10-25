const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MusicSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    imgage:{
        type:String,
        default: null,
    },
    album: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }]
    
})

const Music = mongoose.model('Music',MusicSchema)
module.exports = Music