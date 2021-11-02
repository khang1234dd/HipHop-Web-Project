const express= require('express')
const router = require('express-promise-router')()

const AdminController = require('../controllers/admin')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

const {isAdmin} =require('../common/isrole')

// user
router.route('/getAllUser').get(authenToken,isAdmin,AdminController.getAllUser)
router.route('/getUserById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getUserById)
// album
router.route('/getAllAlbum').get(authenToken,isAdmin,AdminController.getAllAlbum)
router.route('/getAlbumById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getAlbumById)
//category
router.route('/getAllCategory').get(authenToken,isAdmin,AdminController.getAllCategory)
router.route('/getCategoryById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getCategoryById)
//Song
router.route('/getAllSong').get(authenToken,isAdmin,AdminController.getAllSong)
router.route('/getSongById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getSongById)
//Post
router.route('/getAllPost').get(authenToken,isAdmin,AdminController.getAllPost)
router.route('/getPostById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getPostById)

module.exports = router