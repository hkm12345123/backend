const router = require('express').Router();
const { authUser } = require("../middlewares/auth.middleware");
const asyncWrap = require("../utils/asyncWrap");
const handleSpeech = require("../app/controllers/speech.controller")
router.post("/", authUser, asyncWrap(handleSpeech));

module.exports = router;