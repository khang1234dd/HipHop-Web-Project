const express= require('express')
const router = require('express-promise-router')()

const videoController = require('../controllers/videomusic')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

router.route('/getAllVideoMusicPublic').get(videoController.getAllVideoMusicPublic) //done
router.route('/getVideoMusicPublicById/:id').get(validateParam(schemas.idSchema, 'id'),videoController.getVideoMusicPublicById) //done

router.route('/getVideoMusicMostLike').get(videoController.getVideoMusicMostLike) //done
router.route('/getVideoMusicTopDay').get(videoController.getVideoMusicTopDay) //done
router.route('/getVideoMusicNow').get(videoController.getVideoMusicNow) //done

module.exports = router