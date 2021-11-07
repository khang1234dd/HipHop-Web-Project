const express= require('express')
const router = require('express-promise-router')()

const AdminController = require('../controllers/admin')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

const {isAdmin} =require('../common/isrole')

// user
router.route('/getAllUser').get(authenToken,isAdmin,AdminController.getAllUser)
router.route('/getUserById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getUserById)
router.route('/changeLockUser/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changeLockUser)

// album
router.route('/getAllAlbum').get(authenToken,isAdmin,AdminController.getAllAlbum)
router.route('/getAlbumById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getAlbumById)
router.route('/changePublicAlbum/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changePublicAlbum)

//category
router.route('/getAllCategory').get(authenToken,isAdmin,AdminController.getAllCategory)
router.route('/getCategoryById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getCategoryById)
router.route('/createCategory').post(validateBody(schemas.categoryCreateSchema),authenToken,isAdmin,AdminController.createCategory)
router.route('/updateCategory/:id').post(validateBody(schemas.categoryUpdateSchema),authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.updateCategory)
router.route('/deleteCategory/:id').delete(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.deleteCategory)

//Song
router.route('/getAllSong').get(authenToken,isAdmin,AdminController.getAllSong)
router.route('/getSongById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getSongById)
//Post
router.route('/getAllPost').get(authenToken,isAdmin,AdminController.getAllPost)
router.route('/getPostById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getPostById)
router.route('/changePass/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changePass)
router.route('/changePublic/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changePublic)
router.route('/deleteComment/byPostAndbyCommentId/:idPost/:idComment').delete(authenToken,isAdmin,validateParam(schemas.idSchema,'idPost'),validateParam(schemas.idSchema,'idComment'),AdminController.deleteComment)


module.exports = router