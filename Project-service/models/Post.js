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
    owner:{
        type:String,
        required:true
    },
    hot: {
        type: Boolean,
        default: false,
    },
    banned: {
        type: Boolean,
        defaut:false,
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
    
},{ timestamps: true })

const Post = mongoose.model('Post',PostSchema)
module.exports = Post