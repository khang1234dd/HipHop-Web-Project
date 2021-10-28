const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    tinydes:{
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
    datecreate:{
        type:Date,
        default: Date.now
    },
    dateupdate:{
        type:Date,
        default: Date.now()
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }]
    
})

const Post = mongoose.model('Post',PostSchema)
module.exports = Post