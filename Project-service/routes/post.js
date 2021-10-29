const express= require('express')
const router = require('express-promise-router')()

const postController = require('../controllers/post')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

router.route('/getAllPostPassAndPublic').get(postController.getAllPostPassAndPublic)
router.route('/getPostPassAndPublicById/:id').get(validateParam(schemas.idSchema, 'id'),postController.getPostPassAndPublicById)

//test
router.route('/createPost').post(validateBody(schemas.postCreateSchema),authenToken,postController.createPost)


module.exports = router