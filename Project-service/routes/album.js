const express= require('express')
const router = require('express-promise-router')()

const albumController = require('../controllers/album')


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

router.route('/getAllAlbumPublic').get(albumController.getAllAlbumPublic)
router.route('/getAlbumPublicById/:id').get(validateParam(schemas.idSchema, 'id'),albumController.getAlbumPublicById)
// router.route('/updateAlbum/:id').post()
// router.route('/deleteAlbum/: ').delete()


module.exports = router