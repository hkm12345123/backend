const router = require('express').Router();
const { registerValidation, loginValidation, forgetPasswordValidation } = require('../validations/auth.validation');
const { login, register, forgetPasswordUser, verifyCodeUser } = require('../app/controllers/auth.controller')
const { validate } = require('express-validation')
const asyncWrap = require('../utils/asyncWrap')

router.post('/user/login', validate(loginValidation), asyncWrap(login));
router.post('/user/register', validate(registerValidation), asyncWrap(register));
router.post('/user/forget-password', validate(forgetPasswordValidation), asyncWrap(forgetPasswordUser));
router.post('/user/verify-code', asyncWrap(verifyCodeUser));

module.exports = router;
