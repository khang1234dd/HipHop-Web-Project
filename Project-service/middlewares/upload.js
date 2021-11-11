const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        console.log('upload.js --> line 6')
        callback(null,'./upload/image')
        
    },
    filename: function(req,file,callback){
        let ext = path.extname(file.originalname)
        console.log('upload.js --> line 12')
        callback(null, Date.now() +ext)
    }
})

const upload = multer ({
    storage: storage,
    fileFilter: function(req,file,callback){
        if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jfif'){
            callback(null,true)
        }
        else{
            console.log('only jpg & png file supported')
            callback(null,false)
            
        }
    },
    limits:{
        fileSize:1024 * 1024 * 2
    }
})

module.exports = upload