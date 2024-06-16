const router = require('express').Router();
const { validate } = require('express-validation');
const { authAdmin } = require('../middlewares/auth.middleware');
const { getStatistic, createAdmin } = require('../app/controllers/admin.controller')
const asyncWrap = require('../utils/asyncWrap')
const { registerValidation } = require('../validations/auth.validation');

router.get('/', authAdmin, asyncWrap(getStatistic));
router.post('/', validate(registerValidation), asyncWrap(createAdmin));

module.exports = router;
