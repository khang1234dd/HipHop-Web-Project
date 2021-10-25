const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    image:{
        type:String,
        default: null,
    },
    description: {
        type:String,
    },
    public: {
        type: Boolean,
        default: false
    },
    date:{
        type:Date,
        default: Date.now
    },
    music: [{
        type: Schema.Types.ObjectId,
        ref: 'Music'
    }]
    
})

const Album = mongoose.model('Album',AlbumSchema)
module.exports = Album