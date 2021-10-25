const express= require('express')
const router = require('express-promise-router')()

const UserController = require('../controllers/user')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

router.route('/')
    .get(UserController.getAllUser)
    .post(validateBody(schemas.userSchema),UserController.newUser)
    .patch()
    .put()
    .delete()

module.exports = router