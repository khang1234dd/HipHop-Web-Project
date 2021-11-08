const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    tinydes:{
        type:String,
    },
    album: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    song: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
    
}, { timestamps: true })

const Category = mongoose.model('Category',CategorySchema)
module.exports = Category