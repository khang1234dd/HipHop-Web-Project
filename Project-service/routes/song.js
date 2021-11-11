const express= require('express')
const router = require('express-promise-router')()

const songController = require('../controllers/song')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

router.route('/getAllSongPublic').get(songController.getAllSongPublic) //done
router.route('/getSongPublicById/:id').get(validateParam(schemas.idSchema, 'id'),songController.getSongPublicById) //done

router.route('/getSongMostLike').get(songController.getSongMostLike) //done
router.route('/getSongTopDay').get(songController.getSongTopDay) //done
router.route('/getSongNow').get(songController.getSongNow) //done


module.exports = router