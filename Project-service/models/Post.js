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
    pass:{
        type: Boolean,
        default: false
    },
    public:{
        type: Boolean,
        default: false
    },
    image:{
        type:String,
        default:'upload/image/3.png'
    },
    datecreate:{
        type:Date,
        default: Date.now
    },
    dateupdate:{
        type:Date,
        default: Date.now
    },
    owner:{
        type:String,
        required:true
    },
    comment:[{
        userId:{
            type: String
        },
        content:{
            type: String
        },
        date:{
            type:Date,
            default: Date.now
        },
        haveChange:{
            type: Boolean,
            default: false
        },
    }],
    view:{
        type:Number,
        default: 0,
    },
    category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    favoriteuser:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    feedback:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
    
})

const Post = mongoose.model('Post',PostSchema)
module.exports = Post