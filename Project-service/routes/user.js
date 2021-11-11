const express= require('express')
const router = require('express-promise-router')()

const UserController = require('../controllers/user')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

const upload = require('../middlewares/upload')

router.route('/getAlbum').get(authenToken,UserController.getAlbum)//done
router.route('/createAlbum').post(validateBody(schemas.userCreateAlbumSchemas),upload.single('image'),authenToken,UserController.createAlbum)//done
router.route('/updateAlbum/:id')//done
    .put(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdateAlbumSchemas),upload.single('image'),authenToken,UserController.updateAlbum)
    .patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdateAlbumSchemas),upload.single('image'),authenToken,UserController.updateAlbum)
router.route('/deleteAlbum/:id').delete(validateParam(schemas.idSchema,'id'),authenToken,UserController.deleteAlbum)//done
router.route('/addSongforAlbum/:idAlbum').post(validateParam(schemas.idSchema,'idAlbum'),validateBody(schemas.userAddSongforAlbumSchemas),authenToken,UserController.addSongforAlbum)//done
router.route('/removeSonginAlbum/:idAlbum').delete(validateParam(schemas.idSchema,'idAlbum'),validateBody(schemas.userRemoveSonginAlbumSchemas),authenToken,UserController.removeSonginAlbum)//done
// favorite Album
router.route('/likeAlbum/:idAlbum').post(validateParam(schemas.idSchema,'idAlbum'),authenToken,UserController.likeAlbum)//done
router.route('/unlikeAlbum/:idAlbum').post(validateParam(schemas.idSchema,'idAlbum'),authenToken,UserController.unlikeAlbum)//done
router.route('/checklikeAlbum/:idAlbum').get(validateParam(schemas.idSchema,'idAlbum'),authenToken,UserController.checklikeAlbum)//done
// favorite Song
router.route('/likeSong/:idSong').post(validateParam(schemas.idSchema,'idSong'),authenToken,UserController.likeSong)//done
router.route('/unlikeSong/:idSong').post(validateParam(schemas.idSchema,'idSong'),authenToken,UserController.unlikeSong)//done
router.route('/checklikeSong/:idSong').get(validateParam(schemas.idSchema,'idSong'),authenToken,UserController.checklikeSong)//done
// favorite Post
router.route('/likePost/:idPost').post(validateParam(schemas.idSchema,'idPost'),authenToken,UserController.likePost)//done
router.route('/unlikePost/:idPost').post(validateParam(schemas.idSchema,'idPost'),authenToken,UserController.unlikePost)//done
router.route('/checklikePost/:idPost').get(validateParam(schemas.idSchema,'idPost'),authenToken,UserController.checklikePost)//done
// user -> post
router.route('/createPost').post(validateBody(schemas.postCreateSchema),upload.single('image'),authenToken,UserController.createPost)//done
router.route('/updatePost/:id')//done
    .put(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdatePostSchemas),upload.single('image'),authenToken,UserController.updatePost)
    .patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdatePostSchemas),upload.single('image'),authenToken,UserController.updatePost)
router.route('/deletePost/:id').delete(validateParam(schemas.idSchema,'id'),authenToken,UserController.deletePost)//done
router.route('/commentPost/:idPost').post(validateParam(schemas.idSchema,'idPost'),validateBody(schemas.postCommentSchema),authenToken,UserController.commentPost)//done
router.route('/updateCommentPost/:idPost/:idComment').post(validateParam(schemas.idSchema,'idPost'),validateParam(schemas.idSchema,'idComment'),validateBody(schemas.postCommentSchema),authenToken,UserController.updateCommentPost)//done
router.route('/deleteCommentPost/:idPost/:idComment').delete(validateParam(schemas.idSchema,'idPost'),validateParam(schemas.idSchema,'idComment'),authenToken,UserController.deleteCommentPost)//done

module.exports = router