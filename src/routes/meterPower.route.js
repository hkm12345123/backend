const router = require("express").Router();
const { authUser, authAdmin } = require("../middlewares/auth.middleware");
const asyncWrap = require("../utils/asyncWrap");
const { validate } = require("express-validation");
// const { createMeterPowerValidation } = require('../validations/MeterPower.validation');
const {
  createMeterPower,
  // editMeterPower,
  getAllStatistics,
  getAllMonInYear,
} = require("../app/controllers/MeterPower.controller");

//
router.get("/MonthInYear/:year", authUser, asyncWrap(getAllMonInYear)); // get all month in year
router.get("/:filter/:dateTime", authUser, asyncWrap(getAllStatistics)); // params : filter (day, month or year) , tính theo day
router.post("/", authUser, asyncWrap(createMeterPower)); // create new meter power
// router.patch("/:dateTime", authUser, asyncWrap(editMeterPower)); // increase activePower

module.exports = router;
