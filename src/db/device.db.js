const Device = require("../app/models/device.model.js");

// Get all device of user
const getAllDeviceDb = async (query) => {
  const [totalDevices, devices] = await Promise.all([
    Device.find(query).count(),
    Device.find(query),
  ]);
  return {
    devices,
    totalDevices,
  };
};

// Get one device
const getDeviceDb = async (query) => {
  const device = await Device.findOne(query);

  return device;
};

//Get device with filter
const getFilterDevice = async (query) => {
  const device = await Device.find(query);

  return device;
};


// Create one device
const createDeviceDb = async (query) => {
  const device = await new Device(query).save();

  return device;
};

// Delete device
const deleteDeviceDb = async (query) => {
  const rs = await Device(query).delete();

  return rs;
};

// Edit device
const editDeviceDb = async (query) => {
  const { status, _id } = query;
  const device = await Device.findById(_id);
  device.status = status;
  const rs = await device.save();
  return rs;
};

module.exports = {
  getAllDeviceDb,
  getDeviceDb,
  createDeviceDb,
  deleteDeviceDb,
  editDeviceDb,
  getFilterDevice
};
