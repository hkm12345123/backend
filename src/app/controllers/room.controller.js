const apiResponse = require("../../utils/apiResponse");
const APIStatus = require("../../constants/APIStatus");
const {
  getAllRoomDb,
  getRoomDb,
  createRoomDb,
  getDeviceInRoom,
  deleteRoomDb,
  editRoomDb,
} = require("../../db/room.db");

// Get all room
const getAllUserRoom = async (req, res, next) => {
  const rooms = await getAllRoomDb({ userId: req.user._id });

  return res
    .status(200)
    .json(apiResponse({ status: APIStatus.SUCCESS, data: rooms }));
};

// Get one room
const getRoom = async (req, res, next) => {
  const _id = req.params.id,
    user = req.user;
  const room = await getRoomDb({ _id });

  if (!room) {
    return res
      .status(200)
      .json(apiResponse({ status: APIStatus.SUCCESS, data: room }));
  }
};

const createRoom = async (req, res, next) => {
  const { roomName } = req.body;

  // kiểm tra room đã có chưa
  const data = await getRoomDb({ roomName });
  if (data.length != 0)
    return res
      .status(200)
      .json(
        apiResponse({ status: APIStatus.SUCCESS, msg: "Bạn đã có phòng này" })
      );

  const room = await createRoomDb({ roomName, userId: req.user._id });

  return res.status(200).json(
    apiResponse({
      status: APIStatus.SUCCESS,
      msg: "Thêm mới thành công",
      data: room,
    })
  );
};

const getAllDeviceInRoom = async (req, res, next) => {
  const roomId = req.params.id;

  const devices = await getDeviceInRoom({ roomId });

  if (devices.length == 0)
    return res
      .status(200)
      .json(
        apiResponse({
          status: APIStatus.SUCCESS,
          msg: "Cannot find device",
          data: [],
        })
      );

  return res
    .status(200)
    .json(apiResponse({ status: APIStatus.SUCCESS, data: devices }));
};

const deleteRoom = async (req, res, next) => {
  const _id = req.params.id;

  const rs = await deleteRoomDb({ _id });

  // nếu thành công sẽ return _id
  if (rs)
    return res.status(200).json(
      apiResponse({
        status: APIStatus.SUCCESS,
        msg: "Delete room success",
        data: rs,
      })
    );
};

const editRoom = async (req, res, next) => {
  const { roomName } = req.body,
    _id = req.params.id,
    userId = req.user._id;

  const room = await editRoomDb({ roomName, _id, userId });

  return res.status(204).json(
    apiResponse({
      status: APIStatus.SUCCESS,
      msg: "Update room success",
      data: room,
    })
  );
};

module.exports = {
  getAllUserRoom,
  getAllDeviceInRoom,
  getRoom,
  createRoom,
  deleteRoom,
  editRoom,
};
