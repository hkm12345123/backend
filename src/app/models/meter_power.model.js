const mongoose = require("mongoose");

const meterPowerSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  // deviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Device" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dateTime: { type: Date, default: Date.now },
  activePower: { type: Number, default: 0 }, // diện năng tiêu thụ
  // reactivePower: { type: Number, default: 0 },
  // voltage: { type: Number, default: 0 },
  // intensity: { type: Number, default: 0 },
});

module.exports = mongoose.model("MeterPower", meterPowerSchema);

// lưu trữ điện năng tiêu thụ của từng thiết bị trong từng ngày
// tìm từng user để tính tổng điện năng trong ngày
// xét mỗi lần tắt thiết bị sẽ tăng điện năng tiêu thụ lên,
// kiểm tra nếu time qua ngày thì tạo gói tin mới, còn chưa qua thì tăng giá trị activePower
