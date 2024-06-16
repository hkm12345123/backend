const router = require('express').Router();
const { validate } = require('express-validation');
const { authUser } = require('../middlewares/auth.middleware');
const asyncWrap = require('../utils/asyncWrap');
const { createRoomValidation } = require('../validations/room.validation');
const { getAllUserRoom, getAllDeviceInRoom, createRoom, deleteRoom, editRoom } = require('../app/controllers/room.controller');

router.get('/', authUser, asyncWrap(getAllUserRoom));
router.get('/:id', authUser, asyncWrap(getAllDeviceInRoom));
router.post('/', authUser, asyncWrap(createRoom));
router.delete('/:id', authUser, asyncWrap(deleteRoom));
router.put('/:id', authUser, asyncWrap(editRoom));

module.exports = router;
