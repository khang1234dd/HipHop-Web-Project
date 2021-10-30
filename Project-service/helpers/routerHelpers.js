const Joi = require('@hapi/joi')

const validateBody = (schema) => {
    return (req, res, next) => {
        const validatorResult = schema.validate(req.body)

        if (validatorResult.error) {
            return res.status(400).json(validatorResult.error)
        } else {
            if (!req.value) req.value = {}
            if (!req.value['params']) req.value.params = {}

            req.value.body = validatorResult.value
            next()
        }
    }
}

const validateParam = (schema, name) => {
    return (req, res, next) => {
        const validatorResult = schema.validate({ param: req.params[name] })

        if (validatorResult.error) {
            return res.status(400).json(validatorResult.error)
        } else {
            if (!req.value) req.value = {}
            if (!req.value['params']) req.value.params = {}

            req.value.params[name] = req.params[name]
            next()
        }
    }
}

const schemas = {

    //auth validate
    authSignInSchema: Joi.object().keys({
        username: Joi.string().min(2).required(),
        password: Joi.string().min(6).required(),
    }),

    authSignUpSchema: Joi.object().keys({
        username: Joi.string().min(2).required(),
        password: Joi.string().min(6).required(),
        passwordconfirm: Joi.ref('password'),
        email: Joi.string().email().required()
    }),

    authForgotPasswordSchema: Joi.object().keys({
        email: Joi.string().email().required()
    }),

    authResetPasswordSchema: Joi.object().keys({
        newpassword: Joi.string().min(6).required(),
        newpasswordconfirm: Joi.ref('newpassword'),
        token: Joi.string().regex(/^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$/).required(),
    }),

    authUpdateNameSchema: Joi.object().keys({
        name: Joi.string().min(2).required(),
    }),

    authUpdatePasswordSchema: Joi.object().keys({
        newpassword: Joi.string().min(6).required(),
        newpasswordconfirm: Joi.ref('newpassword'),
        oldpassword: Joi.string().min(6).required(),
    }),
    authUpdateEmailSchema: Joi.object().keys({
        otp: Joi.string().min(6).max(6).required(),
        newemail: Joi.string().email().required(),
    }),
    authCheckOtpSchema: Joi.object().keys({
        otp: Joi.string().min(6).max(6).required(),
    }),

    // Params _id validate 
    idSchema: Joi.object().keys({
        param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    }),

    //user validate
    userSchema: Joi.object().keys({
        username: Joi.string().min(2).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().email().required()
    }),

    userOptionalSchema: Joi.object().keys({
        username: Joi.string().min(2).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().email().required()
    }),

    userCreateAlbumSchemas: Joi.object().keys({
        nameAlbum: Joi.string().min(6).required(),
        description: Joi.string().min(10).required(),
        image: Joi.string()
        
    }),

    userUpdateAlbumSchemas: Joi.object().keys({
        name: Joi.string().min(6),
        description: Joi.string().min(10),
        image: Joi.string(),
        
    }),

    userAddSongforAlbumSchemas: Joi.object().keys({
        songId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    }),

    userRemoveSonginAlbumSchemas: Joi.object().keys({
        songId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    }),

    //category validate
    categoryGetByIdSchema: Joi.object().keys({
        categoryname: Joi.string().min(2).required(),
        categorytinydes: Joi.string().min(10).required(),
    }),
    categoryUpdateSchema: Joi.object().keys({
        categoryname: Joi.string().min(2).required(),
        categorytinydes: Joi.string().min(10).required(),
    }),

    //song validate
    songCreateSchema: Joi.object().keys({
        nameSong: Joi.string().min(2).required(),
        link: Joi.string().min(2).required(),
        image: Joi.string().min(2),
        categoryId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),

    }),

    // post validate
    postCreateSchema: Joi.object().keys({
        namePost: Joi.string().min(2).required(),
        tinydes: Joi.string().min(6).required(),
        description:Joi.string().min(10).required(),
        categoryId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        image: Joi.string().min(2),
    }),


}

module.exports = {
    validateBody,
    validateParam,
    schemas
}