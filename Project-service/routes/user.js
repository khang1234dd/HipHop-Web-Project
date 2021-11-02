const express= require('express')
const router = require('express-promise-router')()

const UserController = require('../controllers/user')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')


router.route('/getAlbum').get(authenToken,UserController.getAlbum)
router.route('/createAlbum').post(validateBody(schemas.userCreateAlbumSchemas),authenToken,UserController.createAlbum)
router.route('/updateAlbum/:id')
    .put(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdateAlbumSchemas),authenToken,UserController.updateAlbum)
    .patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdateAlbumSchemas),authenToken,UserController.updateAlbum)
router.route('/deleteAlbum/:id').delete(validateParam(schemas.idSchema,'id'),authenToken,UserController.deleteAlbum)
router.route('/addSongforAlbum/:idAlbum').post(validateParam(schemas.idSchema,'idAlbum'),validateBody(schemas.userAddSongforAlbumSchemas),authenToken,UserController.addSongforAlbum)
router.route('/removeSonginAlbum/:idAlbum').delete(validateParam(schemas.idSchema,'idAlbum'),validateBody(schemas.userRemoveSonginAlbumSchemas),authenToken,UserController.removeSonginAlbum)
// favorite Album
router.route('/likeAlbum/:idAlbum').post(validateParam(schemas.idSchema,'idAlbum'),authenToken,UserController.likeAlbum)
router.route('/unlikeAlbum/:idAlbum').post(validateParam(schemas.idSchema,'idAlbum'),authenToken,UserController.unlikeAlbum)
router.route('/checklikeAlbum/:idAlbum').get(validateParam(schemas.idSchema,'idAlbum'),authenToken,UserController.checklikeAlbum)
// favorite Song
router.route('/likeSong/:idSong').post(validateParam(schemas.idSchema,'idSong'),authenToken,UserController.likeSong)
router.route('/unlikeSong/:idSong').post(validateParam(schemas.idSchema,'idSong'),authenToken,UserController.unlikeSong)
router.route('/checklikeSong/:idSong').get(validateParam(schemas.idSchema,'idSong'),authenToken,UserController.checklikeSong)
// user -> post
router.route('/createPost').post(validateBody(schemas.postCreateSchema),authenToken,UserController.createPost)
router.route('/updatePost/:id')
    .put(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdatePostSchemas),authenToken,UserController.updatePost)
    .patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdatePostSchemas),authenToken,UserController.updatePost)
router.route('/deletePost/:id').delete(validateParam(schemas.idSchema,'id'),authenToken,UserController.deletePost)


module.exports = router