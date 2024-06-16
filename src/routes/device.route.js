const router = require("express").Router();
const { authUser, authAdmin } = require("../middlewares/auth.middleware");
const asyncWrap = require("../utils/asyncWrap");
const { validate } = require("express-validation");
// const { createDeviceValidation } = require('../validations/device.validation');
const {
  getDevice,
  getAllDevices,
  createDevice,
  deleteDevice,
  editDevice,
} = require("../app/controllers/device.controller");

// Get all devices in house
router.get("/", authUser, asyncWrap(getAllDevices));
router.get("/:id", authUser, asyncWrap(getDevice));
router.post("/", authUser, asyncWrap(createDevice));
router.delete("/:id", authUser, asyncWrap(deleteDevice));
router.patch("/:id", authUser, asyncWrap(editDevice));

module.exports = router;
