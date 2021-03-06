const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SongSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    image:{
        type:String,
        default: '',
    },
    link:{
        type:String,
        default: '',
    },
    public:{
        type: Boolean,
        default: false
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ownersong:{
        type: String,
        default: 'unknown'
    },
    hot:{
        type: Boolean,
        default: false
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
    
}, { timestamps: true })

const Song = mongoose.model('Song',SongSchema)
module.exports = Song