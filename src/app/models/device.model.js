const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema(
  {
    deviceName: {
      type: String,
      // required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    roomId: {
      type: String,
      required: true,
    },
    deviceId: {
      type: String,
      // required: true,
    },
    startTime: {
      type: Date,
    },
    wattage: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // tự động tạo createAt, modifyAt
  }
);

module.exports = mongoose.model("Device", deviceSchema);
