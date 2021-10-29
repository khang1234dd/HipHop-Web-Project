const express= require('express')
const router = require('express-promise-router')()

const songController = require('../controllers/song')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

router.route('/getAllSongPublic').get(songController.getAllSongPublic)
router.route('/getSongPublicById/:id').get(validateParam(schemas.idSchema, 'id'),songController.getSongPublicById)

//test
router.route('/createSong').post(validateBody(schemas.songCreateSchema),authenToken,songController.createSong)

// router.route('/getCategoryById/:id').get(validateParam(schemas.idSchema,'id'),categoryController.getCategoryById)
// router.route('/createCategory').post(validateBody(schemas.categoryGetByIdSchema),categoryController.createCategory)
// router.route('/updateCategory/:id')
//     .put(validateParam(schemas.idSchema,'id'),validateBody(schemas.categoryUpdateSchema),categoryController.updateCategory)
//     .patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.categoryUpdateSchema),categoryController.updateCategory)
// router.route('/deleteCategory/:id').delete(validateParam(schemas.idSchema,'id'),categoryController.deleteCategory)


module.exports = router