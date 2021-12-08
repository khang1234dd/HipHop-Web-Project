
var admin = require("firebase-admin");
const {STORAGE_BUCKET} = require("../config/firebaseConfig")
var serviceAccount = require("../config/hiphop-project-firebase-adminsdk-h8xii-a22585d053.json");

const BUCKET = STORAGE_BUCKET

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
});

const bucket = admin.storage().bucket();

const uploadFile = (req,res,next) => {

    console.log(req.file)
    if(!req.file) return  next();
    const image = req.file;
    console.log('image ->> line 17', image)
    const filename = Date.now() + "." + image.originalname.split(".").pop();

    const isImageAudio = image.mimetype.split('/')[0]

    let folder = 'audio'
    let file = bucket.file('audio/'+filename)
    console.log(isImageAudio)

    if(isImageAudio !== 'audio' ) {
        file = bucket.file('images/'+filename)
        folder= 'images'

    }

    
    
        
    

    
    const stream = file.createWriteStream({
        metadata: {
            contentType: image.mimetype
        }
    });

    stream.on("error", (e) => {
        console.error('line 29 firebase',e);
    })

    stream.on("finish", async ()=> {
        await file.makePublic();
        console.log('vao dc roi')

        req.file.firebaseUrl = `https://storage.googleapis.com/${BUCKET}/${folder}/${filename}`

        next()

    })

    stream.end(image.buffer)
}



module.exports = {
    uploadFile
};
