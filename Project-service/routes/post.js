const express= require('express')
const router = require('express-promise-router')()

const postController = require('../controllers/post')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

router.route('/getAllPostPassAndPublic').get(postController.getAllPostPassAndPublic) //done
router.route('/getPostPassAndPublicById/:id').get(validateParam(schemas.idSchema, 'id'),postController.getPostPassAndPublicById)//done
router.route('/getPostHipHopTopDay').get(postController.getPostHipHopTopDay)//done
router.route('/getPostHipHopNow').get(postController.getPostHipHopNow)//done
router.route('/getPostHipHopMostViewed').get(postController.getPostHipHopMostViewed)//done
router.route('/getPostHipHopMostComment').get(postController.getPostHipHopMostComment)//done
router.route('/getPostHipHopMostLike').get(postController.getPostHipHopMostLike)//done

//test
// router.route('/createPost').post(validateBody(schemas.postCreateSchema),authenToken,postController.createPost)


module.exports = router