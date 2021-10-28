const express= require('express')
const router = require('express-promise-router')()

const categoryController = require('../controllers/category')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

router.route('/getAllCategory').get(categoryController.getAllCategory)
router.route('/getCategoryById/:id').get(validateParam(schemas.idSchema,'id'),categoryController.getCategoryById)
router.route('/createCategory').post(validateBody(schemas.categoryGetByIdSchema),categoryController.createCategory)
router.route('/updateCategory/:id')
    .put(validateParam(schemas.idSchema,'id'),validateBody(schemas.categoryUpdateSchema),categoryController.updateCategory)
    .patch(validateParam(schemas.idSchema,'id'),validateBody(schemas.categoryUpdateSchema),categoryController.updateCategory)
router.route('/deleteCategory/:id').delete(validateParam(schemas.idSchema,'id'),categoryController.deleteCategory)


module.exports = router