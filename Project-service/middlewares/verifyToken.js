const JWT = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/index')
const { unlink } = require('fs/promises');

const authenToken= (req,res,next) => {
    const authorizationHeader =req.headers.authorization;

    //Bear [token]
    const token = authorizationHeader.split(' ')[1];

    if(!token) return res.status(401).json({message: false});

    JWT.verify(token,JWT_SECRET, async (err,decoded) => {
        if (err) {
            if(req.file){
                await unlink(req.file.path)
            }
            return res.status(400).json({message: 'Failed to verify token'})
        }
        else{
            req.body.token = decoded;
            console.log('verifyToken.js --> line: 18 --> decode: ',decoded)
            next();
        }
    })
}

module.exports = {
    authenToken,
}