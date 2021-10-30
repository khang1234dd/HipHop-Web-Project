const express= require('express')
const router = require('express-promise-router')()

const UserController = require('../controllers/user')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

router.route('/getAllUser').get(UserController.getAllUser)
router.route('/getUserById/:id').get(validateParam(schemas.idSchema,'id'),UserController.getUserById)
router.route('/getAlbum').get(authenToken,UserController.getAlbum)
router.route('/createAlbum').post(validateBody(schemas.userCreateAlbumSchemas),authenToken,UserController.createAlbum)
router.route('/updateAlbum/:id')
    .put(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdateAlbumSchemas),authenToken,UserController.updateAlbum)
    .patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.userUpdateAlbumSchemas),authenToken,UserController.updateAlbum)
router.route('/deleteAlbum/:id').delete(validateParam(schemas.idSchema,'id'),authenToken,UserController.deleteAlbum)
router.route('/addSongforAlbum/:idAlbum').post(validateParam(schemas.idSchema,'idAlbum'),validateBody(schemas.userAddSongforAlbumSchemas),authenToken,UserController.addSongforAlbum)
router.route('/removeSonginAlbum/:idAlbum').delete(validateParam(schemas.idSchema,'idAlbum'),validateBody(schemas.userRemoveSonginAlbumSchemas),authenToken,UserController.removeSonginAlbum)

module.exports = router