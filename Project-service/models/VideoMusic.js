const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VideoMusicSchema = new Schema({
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
    ownervideo:{
        type: String,
        default: 'unknown'
    },
    hot:{
        type: Boolean,
        default: false
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    favoriteuser:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
    
}, { timestamps: true })

const VideoMusic = mongoose.model('VideoMusic',VideoMusicSchema)
module.exports = VideoMusic