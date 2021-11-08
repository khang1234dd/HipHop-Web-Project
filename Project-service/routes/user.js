const express= require('express')
const router = require('express-promise-router')()

const UserController = require('../controllers/user')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

const upload = require('../middlewares/upload')

router.route('/getAlbum').get(authenToken,UserController.getAlbum)
router.route('/createAlbum').post(validateBody(schemas.userCreateAlbumSchemas),upload.single('image'),authenToken,UserController.createAlbum)
router.route('/updateAlbum/:id')
    .put(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdateAlbumSchemas),upload.single('image'),authenToken,UserController.updateAlbum)
    .patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdateAlbumSchemas),upload.single('image'),authenToken,UserController.updateAlbum)
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
// favorite Post
router.route('/likePost/:idPost').post(validateParam(schemas.idSchema,'idPost'),authenToken,UserController.likePost)
router.route('/unlikePost/:idPost').post(validateParam(schemas.idSchema,'idPost'),authenToken,UserController.unlikePost)
router.route('/checklikePost/:idPost').get(validateParam(schemas.idSchema,'idPost'),authenToken,UserController.checklikePost)
// user -> post
router.route('/createPost').post(validateBody(schemas.postCreateSchema),upload.single('image'),authenToken,UserController.createPost)
router.route('/updatePost/:id')
    .put(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdatePostSchemas),upload.single('image'),authenToken,UserController.updatePost)
    .patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdatePostSchemas),upload.single('image'),authenToken,UserController.updatePost)
router.route('/deletePost/:id').delete(validateParam(schemas.idSchema,'id'),authenToken,UserController.deletePost)
router.route('/commentPost/:idPost').post(validateParam(schemas.idSchema,'idPost'),validateBody(schemas.postCommentSchema),authenToken,UserController.commentPost)
router.route('/updateCommentPost/:idPost/:idComment').post(validateParam(schemas.idSchema,'idPost'),validateParam(schemas.idSchema,'idComment'),validateBody(schemas.postCommentSchema),authenToken,UserController.updateCommentPost)
router.route('/deleteCommentPost/:idPost/:idComment').delete(validateParam(schemas.idSchema,'idPost'),validateParam(schemas.idSchema,'idComment'),authenToken,UserController.deleteCommentPost)

module.exports = router