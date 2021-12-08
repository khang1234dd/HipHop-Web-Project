const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        console.log('uploadSong.js --> line 6')
        callback(null,'./upload/song')
        
    },
    filename: function(req,file,callback){
        let ext = path.extname(file.originalname)
        console.log('uploadSong.js --> line 12')
        callback(null, Date.now() +ext)
    }
})

const uploadSong = multer ({
    storage: multer.memoryStorage(),
    fileFilter: function(req,file,callback){
        if(file.mimetype === 'audio/mpeg' || file.mimetype === 'audio/mp3' || file.mimetype === 'audio/mpeg3' || file.mimetype === 'audio/x-mpeg-3' || file.mimetype === 'video/mpeg' || file.mimetype === 'video/x-mpeg' ){
            console.log(file)
            callback(null,true)
        }
        else{
            console.log(file)
            console.log('only mp3')
            callback(null,false)
            
        }
    },
    limits:{
        fileSize:1024 * 1024 * 5
    }
})

module.exports = uploadSong