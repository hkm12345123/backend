const apiResponse = require("../../utils/apiResponse");
const APIStatus = require("../../constants/APIStatus");
const {
  getAllSubscriberDb,
  getSubscriberDb,
  createSubscriberDb,
  deleteSubscriberDb,
  editSubscriberDb,
} = require("../../db/subscriber.db");

// Get all subscriber
const getAllSubscriber = async (req, res, next) => {
  const subscribers = await getAllSubscriberDb({});

  return res
    .status(200)
    .json(apiResponse({ status: APIStatus.SUCCESS, data: subscribers }));
};

// Get one subscriber
const getSubscriber = async (req, res, next) => {
  const _id = req.params.id,
    user = req.user;
  const subscriber = await getSubscriber({ _id });

  if (!subscriber) {
    return res
      .status(200)
      .json(apiResponse({ status: APIStatus.SUCCESS, data: subscriber }));
  }
};

// tạo 1 subscriber
const createsSubscriber = async (req, res, next) => {
  const { name } = req.body;

  // kiểm tra subscriber đã có chưa
  const data = await getSubscriberDb({ name });
  if (data.length != 0)
    return res.status(200).json(
      apiResponse({
        status: APIStatus.SUCCESS,
        msg: "Bạn đã có subscriber này",
      })
    );

  const subscriber = await createSubscriberDb({ name, userId: req.user._id });

  return res.status(200).json(
    apiResponse({
      status: APIStatus.SUCCESS,
      msg: "Thêm mới thành công",
      data: subscriber,
    })
  );
};

// xóa 1 subscriber
const deleteSubscriber = async (req, res, next) => {
  const _id = req.params.id;

  const rs = await deleteSubscriberDb({ _id });

  // nếu thành công sẽ return _id
  if (rs)
    return res.status(200).json(
      apiResponse({
        status: APIStatus.SUCCESS,
        msg: "Delete subscriber success",
        data: rs,
      })
    );
};

// chỉnh sửa 1 subscriber
const editSubscriber = async (req, res, next) => {
  const { name, subscribedToChannel } = req.body,
    _id = req.params.id;
  // userId = req.user._id;

  const subscriber = await editSubscriberDb({ name, subscribedToChannel, _id });

  return res.status(204).json(
    apiResponse({
      status: APIStatus.SUCCESS,
      msg: "Update subscriber success",
      data: subscriber,
    })
  );
};

module.exports = {
  getAllSubscriber,
  getSubscriber,
  createsSubscriber,
  deleteSubscriber,
  editSubscriber,
};
