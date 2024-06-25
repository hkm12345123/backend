const router = require("express").Router();
const { authUser } = require("../middlewares/auth.middleware");
const asyncWrap = require("../utils/asyncWrap");
const {
  getSensor,
  getDataSensor,
  insertDataSensor,
  getSensorByRoom
} = require("../app/controllers/sensor.controller");

router.get("/", authUser, asyncWrap(getSensor));
router.get("/:roomId", authUser, asyncWrap(getSensorByRoom));
router.post("/get-data", authUser, asyncWrap(getDataSensor));
router.post("/push-data", authUser, asyncWrap(insertDataSensor));

module.exports = router;
