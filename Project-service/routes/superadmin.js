const express= require('express')
const router = require('express-promise-router')()

const SuperAdminController = require('../controllers/superadmin')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')

router.route('/changeRole/:id').post(validateParam(schemas.idSchema,'id'),validateBody(schemas.superadminChangeRoleSchemas),authenToken,SuperAdminController.changeRole)//done

module.exports = router