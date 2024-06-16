const router = require("express").Router();
const { authUser } = require("../middlewares/auth.middleware");
const asyncWrap = require("../utils/asyncWrap");
const {
  getAllSubscriber,
  getSubscriber,
  createsSubscriber,
  deleteSubscriber,
  editSubscriber,
} = require("../app/controllers/subscriber.controller");

router.get("/", authUser, asyncWrap(getAllSubscriber));
router.get("/:id", authUser, asyncWrap(getSubscriber));
router.post("/", authUser, asyncWrap(createsSubscriber));
router.delete("/:id", authUser, asyncWrap(deleteSubscriber));
router.patch("/:id", authUser, asyncWrap(editSubscriber));

module.exports = router;
