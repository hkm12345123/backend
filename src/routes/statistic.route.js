const router = require("express").Router();
const { authUser, authAdmin } = require("../middlewares/auth.middleware");
const asyncWrap = require("../utils/asyncWrap");
const {getAverageDataForLast7Days} = require("../app/controllers/statistic.controller")

router.get("/", authUser, asyncWrap(getAverageDataForLast7Days)); // create new meter power
// router.patch("/:dateTime", authUser, asyncWrap(editMeterPower)); // increase activePower

module.exports = router;
