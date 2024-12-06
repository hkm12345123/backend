const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mq135Schema = new mongoose.Schema(
  {
    mq135: {
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


module.exports = mongoose.model("Mq135", mq135Schema);
