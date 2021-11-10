const express= require('express')
const router = require('express-promise-router')()

const authenticateController = require('../controllers/authenticate')

const { validateBody, validateParam, schemas } = require('../helpers/routerHelpers')

const {authenToken} = require('../middlewares/verifyToken')
const upload = require('../middlewares/upload')

router.route('/secret').get(authenToken,authenticateController.secret)
router.route('/signin').post(validateBody(schemas.authSignInSchema),authenticateController.signIn)
router.route('/signup').post(validateBody(schemas.authSignUpSchema), authenticateController.signUp)
router.route('/checkotpsignup').post(validateBody(schemas.authCheckOtpFGSchema),authenticateController.checkOtpSignUp)

router.route('/forgetpassword').post(validateBody(schemas.authForgotPasswordSchema),authenticateController.forgetPassword)
router.route('/resetpassword').post(validateBody(schemas.authResetPasswordSchema),authenticateController.resetPassword)
router.route('/checkotpfg').post(validateBody(schemas.authCheckOtpFGSchema),authenticateController.checkOtpFG)


router.route('/updatename').post(validateBody(schemas.authUpdateNameSchema),authenToken,authenticateController.updateName)
router.route('/updateimage').post(upload.single('image'),authenToken,authenticateController.updateImage)
router.route('/updatepassword').post(validateBody(schemas.authUpdatePasswordSchema),authenToken,authenticateController.updatePassword)



router.route('/sendmailupdateemail').post(authenToken,authenticateController.sendMailUpdateEmail)
router.route('/updateemail').post(validateBody(schemas.authUpdateEmailSchema),authenToken,authenticateController.updateEmail)
router.route('/checkotp').post(validateBody(schemas.authCheckOtpSchema),authenToken,authenticateController.checkOtp)

router.route('/user').get(authenToken,authenticateController.userInfo)


module.exports = router