const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    imgage:{
        type:String,
        default: null,
    },
    music: [{
        type: Schema.Types.ObjectId,
        ref: 'Music'
    }]
    
})

const Album = mongoose.model('Album',AlbumSchema)
module.exports = Album