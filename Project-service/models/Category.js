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
    music: [{
        type: Schema.Types.ObjectId,
        ref: 'Music'
    }],
    post: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
    
})

const Category = mongoose.model('Category',CategorySchema)
module.exports = Category