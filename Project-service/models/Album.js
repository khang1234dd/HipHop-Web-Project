const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlbumSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    image:{
        type:String,
        default: 'upload/image/3.png',
    },
    description: {
        type:String,
        required: true,
    },
    public: {
        type: Boolean,
        default: false
    },
    owner:{
        type:String,
        required:true
    },
    hot: {
        type: Boolean,
        default: false
    },
    song: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
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

const Album = mongoose.model('Album',AlbumSchema)
module.exports = Album