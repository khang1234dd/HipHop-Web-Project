const express= require('express')
const router = require('express-promise-router')()

const UserController = require('../controllers/user')
const AlbumController = require('../controllers/album')


const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

router.route('/getallAlbum').get()
router.route('/getAlbum/:id').get()
router.route('/updateAlbum/:id').post()
router.route('/deleteAlbum/:id').delete()


module.exports = router