const express= require('express')
const router = require('express-promise-router')()

const AdminController = require('../controllers/admin')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

const {isAdmin} =require('../middlewares/isrole')

const upload = require('../middlewares/upload')
const uploadSong = require('../middlewares/uploadSong')
const {uploadFile} = require('../middlewares/firebase')

// user
router.route('/getAllUser').get(authenToken,isAdmin,AdminController.getAllUser) //done
router.route('/getUserById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getUserById) //done
router.route('/changeLockUser/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changeLockUser)//done

// album
router.route('/getAllAlbum').get(authenToken,isAdmin,AdminController.getAllAlbum)//done
router.route('/getAlbumById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getAlbumById)//done
router.route('/changeAlbumPublic/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changeAlbumPublic)//done
router.route('/changeAlbumHot/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changeAlbumHot)//done

//category
router.route('/getAllCategory').get(authenToken,isAdmin,AdminController.getAllCategory) //done
router.route('/getCategoryById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getCategoryById)//done
router.route('/createCategory').post(validateBody(schemas.categoryCreateSchema),authenToken,isAdmin,AdminController.createCategory)//done
router.route('/updateCategory/:id').post(validateBody(schemas.categoryUpdateSchema),authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.updateCategory)//done
router.route('/deleteCategory/:id').delete(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.deleteCategory) //done

//Song
router.route('/getAllSong').get(authenToken,isAdmin,AdminController.getAllSong)//done
router.route('/getSongById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getSongById)//done
router.route('/createSong').post(uploadSong.single('song'),uploadFile,authenToken,isAdmin,AdminController.createSong)//done
router.route('/updateSong/:id')//done
    .put(validateBody(schemas.songUpdateSchema),authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.updateSong)
    .patch(validateBody(schemas.songUpdateSchema),authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.updateSong)
router.route('/updateSongImage/:id').post(upload.single('image'),uploadFile,authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.updateSongImage)
router.route('/updateSongFile/:id').post(uploadSong.single('song'),uploadFile,authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.updateSongFile)
router.route('/changeSongHot/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changeSongHot)//done
router.route('/changeSongPublic/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changeSongPublic)//done
router.route('/deleteSong/:id').delete(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.deleteSong)//done

//Post
router.route('/getAllPost').get(authenToken,isAdmin,AdminController.getAllPost)//done
router.route('/getPostById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getPostById)//done
router.route('/changePostPass/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changePostPass)//done
router.route('/changePostPublic/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changePostPublic)//done
router.route('/changePostBanned/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changePostBanned)//done
router.route('/changePostHot/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changePostHot)//done
router.route('/deleteComment/byPostAndbyCommentId/:idPost/:idComment').delete(authenToken,isAdmin,validateParam(schemas.idSchema,'idPost'),validateParam(schemas.idSchema,'idComment'),AdminController.deleteComment)//done


//Video Music 
router.route('/getAllVideoMusic').get(authenToken,isAdmin,AdminController.getAllVideoMusic)
router.route('/getVideoMusicById/:id').get(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.getVideoMusicById)
router.route('/createVideoMusic').post(validateBody(schemas.VideoMusicCreateSchema),authenToken,isAdmin,AdminController.createVideoMusic)
router.route('/updateVideoMusic/:id')
    .put(validateBody(schemas.VideoMusicUpdateSchema),authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.updateVideoMusic)
    .patch(validateBody(schemas.VideoMusicUpdateSchema),authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.updateVideoMusic)
router.route('/updateVideoMusicImage/:id').post(upload.single('image'),uploadFile,authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.updateVideoMusicImage)
router.route('/changeVideoMusicHot/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changeVideoMusicHot)
router.route('/changeVideoMusicPublic/:id').post(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.changeVideoMusicPublic)
router.route('/deleteVideoMusic/:id').delete(authenToken,isAdmin,validateParam(schemas.idSchema,'id'),AdminController.deleteVideoMusic)


router.route('/getStatistic').get(authenToken,isAdmin,AdminController.statistic)
module.exports = router