const mongoose = require("mongoose");

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
    CO: {
      type: Number,
      required: true,
    },
    aqi_CO: {
      type: Number,
      required: true,
    },
    so2: {
      type: Number,
      required: true,
    },
    aqi_so2: {
      type: Number,
      required: true,
    },
    pm25: {
      type: Number,
      required: true,
    },
    aqi_pm25: {
      type: Number,
      required: true,
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
