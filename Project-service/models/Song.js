const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SongSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    image:{
        type:String,
        default: 'upload/image/2.jpg',
    },
    link:{
        type:String,
    },
    public:{
        type: Boolean,
        default: false
    },
    owner:{
        type: String,
        required: true
    },
    datecreate:{
        type: Date,
        default: Date.now
    },
    dateupdate:{
        type: Date,
        default: Date.now
    },
    album: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    favoriteuser:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
    
})

const Song = mongoose.model('Song',SongSchema)
module.exports = Song