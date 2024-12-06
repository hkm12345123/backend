const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sensorSchema = new mongoose.Schema(
  {
    humidityAir: {
      type: Number,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    pm25: {
      type: Number,
      required: true,
    },
    locationId: {
      type: String,
      ref: 'Room'
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
    modifiedDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sensor", sensorSchema);
