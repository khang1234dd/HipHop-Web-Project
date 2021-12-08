
var admin = require("firebase-admin");


const deleteFile = async (url) =>{

    const imageName = url.split('/')
    await admin.storage().bucket().file(imageName[4]+ '/' +imageName[5]).delete();
}

module.exports= {
    deleteFile
}