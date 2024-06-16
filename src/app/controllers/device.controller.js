const moment = require("moment");
const apiResponse = require("../../utils/apiResponse");
const APIStatus = require("../../constants/APIStatus");
const {
  getAllDeviceDb,
  getDeviceDb,
  createDeviceDb,
  deleteDeviceDb,
  editDeviceDb,
} = require("../../db/device.db");
const MeterPower = require("../models/meter_power.model");
const mqttClient = require("../../services/mqtt.service");
const smart_home_cd = "smart_home_control_device";

// GET('/')
const getAllDevices = async (req, res, next) => {
  const _id = req.user._id;

  const devices = await getAllDeviceDb({ userId: _id });

  if (devices)
    return res
      .status(200)
      .json(apiResponse({ status: APIStatus.SUCCESS, data: devices }));
  else
    return res
      .status(404)
      .json(apiResponse({ status: APIStatus.FAIL, msg: "Device not found" }));
};

// GET('/:id')
const getDevice = async (req, res, next) => {
  const device = await getDeviceDb({ _id: req.params.id });

  // null nếu không tìm thấy
  if (device) {
    return res
      .status(200)
      .json(apiResponse({ status: APIStatus.SUCCESS, data: device }));
  } else
    return res
      .status(404)
      .json(apiResponse({ status: APIStatus.FAIL, msg: "Device not found" }));
};

// POST('/')
const createDevice = async (req, res, next) => {
  const userId = req.user._id,
    { deviceId, deviceName, status, roomId } = req.body;
  const device = await getDeviceDb({ deviceName, roomId });
  if (device)
    return res
      .status(200)
      .json(
        apiResponse({ status: APIStatus.FAIL, msg: "Bạn đã có thiết bị này" })
      );

  const rs = await createDeviceDb({ deviceName, deviceId, status, roomId, userId });

  return res
    .status(201)
    .json(apiResponse({ status: APIStatus.SUCCESS, data: rs }));
};

// DELETE(/:id)
const deleteDevice = async (req, res, next) => {
  const _id = req.params.id;

  const data = await getDeviceDb({ _id });
  if (!data)
    return res.status(400).json(
      apiResponse({
        status: APIStatus.FAIL,
        msg: "You don't have this device",
      })
    );

  const device = await deleteDeviceDb({ _id });

  if (device)
    return res.status(200).json(
      apiResponse({
        status: APIStatus.SUCCESS,
        msg: "Delete success this device",
        data: device,
      })
    );
};

// EDIT (/:id)
// tăng điện năng tiêu thụ
const editDevice = async (req, res, next) => {
  const userId = req.user._id;
  const _id = req.params.id;
  const { status } = req.body;

  const rs = await editDeviceDb({ _id, status });
  const device = await getDeviceDb({ _id });
  const message = {
    deviceId: device.deviceId,
    status,
  };
  if (rs) {
    mqttClient.publish(smart_home_cd, JSON.stringify(message));

    getMeterPowerByDay(status, userId, device);

    return res.status(200).json(
      apiResponse({
        status: APIStatus.SUCCESS,
        msg: "Edit success this device",
        data: rs,
      })
    );
  }
};

async function getMeterPowerByDay(status, userId, device) {
  const dateNow = moment().format("YYYY-MM-DD");
  const meter_power = await MeterPower.findOne({ userId }).sort({
    dateTime: -1,
  });

  // Nếu tắt thì cộng điện tiêu thụ
  if (status == "off") {
    // nếu bảng meter-Power đã có document của ngày hôm nay
    if (dateNow === moment(meter_power.dateTime).format("YYYY-MM-DD")) {
      // thực hiện tăng điện tăng
      let d = new Date();
      let milliseconds = d.getTime() - device.startTime.getTime();
      let hours = milliseconds / 1000 / 3600;
      let numPower = Math.round(device.wattage * hours);
      meter_power.activePower += numPower;
      await meter_power.save();
    }
  } else if (status == "on") {
    // Nếu bật thì đặt startTime

    if ((!meter_power) || (dateNow !== moment(meter_power.dateTime).format("YYYY-MM-DD"))) {
      await new MeterPower({ userId }).save();
    }
    device.startTime = moment();
    await device.save();
  }
}
module.exports = {
  getDevice,
  getAllDevices,
  createDevice,
  deleteDevice,
  editDevice,
};
