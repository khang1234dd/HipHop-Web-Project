const express= require('express')
const router = require('express-promise-router')()

const albumController = require('../controllers/album')


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

router.route('/getAllAlbumPublic').get(albumController.getAllAlbumPublic)//done
router.route('/getAlbumPublicById/:id').get(validateParam(schemas.idSchema, 'id'),albumController.getAlbumPublicById)//done

router.route('/getAlbumMostLike').get(albumController.getAlbumMostLike) //done
router.route('/getAlbumTopDay').get(albumController.getAlbumTopDay) //done
router.route('/getAlbumNow').get(albumController.getAlbumNow) //done
// router.route('/updateAlbum/:id').post()
// router.route('/deleteAlbum/: ').delete()


module.exports = router